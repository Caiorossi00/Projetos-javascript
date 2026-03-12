let listaDeTarefas = [];

const tarefasElement = document.querySelector("#tarefas");

function adicionarTarefa() {
  let novaTarefa = document.querySelector("#novaTarefa").value;

  if (novaTarefa.trim() === "") {
    alert("A tarefa não pode ser vazia.");
    return;
  }

  let id = 0;

  for (let i = 0; i < listaDeTarefas.length; i++) {
    if (listaDeTarefas[i].id > id) {
      id = listaDeTarefas[i].id;
    }
  }

  id++;

  listaDeTarefas.push({
    id: id,
    texto: novaTarefa,
  });

  exibirTarefas();
}

function deletarTarefa(id) {
  for (let i = 0; i < listaDeTarefas.length; i++) {
    if (listaDeTarefas[i].id === id) {
      listaDeTarefas.splice(i, 1);
      break;
    }
  }

  exibirTarefas();
}

function exibirTarefas() {
  tarefasElement.innerHTML = "";

  for (let i = 0; i < listaDeTarefas.length; i++) {
    const tarefa = listaDeTarefas[i];

    const li = document.createElement("li");
    li.textContent = tarefa.texto;

    const botao = document.createElement("button");
    botao.textContent = "Excluir";

    botao.onclick = function () {
      deletarTarefa(tarefa.id);
    };

    li.appendChild(botao);

    tarefasElement.appendChild(li);
  }
}
