var tarefas = json.parse(localStorage.getItem("tarefas") || "[]"); 

var listaTarefas = document.getElementsByClassName("lista-tarefas")[0];
var inputTarefa = document.getElementById("input-tarefa");

function salvarTarefasLocalStorage() { 
    var tarefasSring = JSON.stringify(tarefas);

    localStorage.setItem("tarefas", tarefasSring);
}


function adicionarTarefa() {
    var texto = inputTarefa.value.trim(); 
    if (texto === "") {
        alert("VOCE PRECISA DIGITAR UMA TAREFA PARA ADICIONAR!!!");
        return;
    }

if(texto.length <= 3) {
    alert("A TAREFA PRECISA TER MAIS DE 3 CARACTERES!!!");
    return;
}
     var novaTarefa = {
        id: tarefas [tarefas.length -1 ].id + 1,
        texto: texto,
        concluida: false
        
    };
    tarefas.push(novaTarefa);
    salvarTarefasLocalStorage();

    desenharTarefas(); 

    inputTarefa.value = "";
}

function excluirTarefa(id) {
 tarefas = tarefas.filter(tarefa => tarefa.id !== id);   
 salvarTarefasLocalStorage();
 desenharTarefas();
}


 function alternarTarefa(id) {

        var index;
    for (var i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id === id) {
            index = i;

        }
    }

    if (index !== undefined) { 
      tarefas[index].concluida = !tarefas[index].concluida;
      salvarTarefasLocalStorage();
      desenharTarefas()
}
}

function desenharTarefas() {
    listaTarefas.innerHTML = "";



for (var i = 0; i < tarefas.length; i++) {
     var icone = tarefas[i].concluida === true ? "radio_button_checked" : "radio_button_unchecked";
     var classes = tarefas[i].concluida === true ? "tarefa tarefa-concluida" : "tarefa";

    listaTarefas.innerHTML += `
      <li class="${classes}">
                <button class="botao-check" onclick="alternarTarefa(${tarefas[i].id})">
                    <span class="material-symbols-outlined">
                        ${icone}
                    </span>
                </button>

                <span class="tarefa-texto">
                 ${ tarefas[i].texto }
                </span>

                <button class="botao-excluir" onclick="excluirTarefa(${tarefas[i].id})">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </li>
            `;
}
            
}
desenharTarefas();