const nomes = [
  "Caio",
  "Rossi",
  "Ana",
  "Marina",
  "João",
  "Pedro",
  "Carlos",
  "Fernanda",
  "Juliana",
  "Rafael",
];
function exibirNomes(lista) {
  const listaCompleta = document.querySelector("#lista");

  listaCompleta.innerHTML = "";

  lista.forEach((nome) => {
    listaCompleta.innerHTML += `<li>${nome}</li>`;
  });
}

function buscarNome() {
  const busca = document.querySelector("#busca").value.toLowerCase();

  const listaFiltrada = nomes.filter((nome) =>
    nome.toLowerCase().includes(busca)
  );

  exibirNomes(listaFiltrada);
}

exibirNomes(nomes);
