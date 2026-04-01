let jogadores = [
  { nome: "Caio", pontuacao: 100 },
  { nome: "Luis", pontuacao: 80 },
  { nome: "Clara", pontuacao: 50 },
];

function renderizarRanking() {
  const lista = document.getElementById("ranking");

  lista.innerHTML = "";

  const ordenado = jogadores.sort((a, b) => b.pontuacao - a.pontuacao);

  ordenado.forEach((jogador, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}º ${jogador.nome} - ${jogador.pontuacao} pts`;
    lista.appendChild(li);
  });
}

function adicionarJogador() {
  const nome = document.getElementById("nome").value;
  const pontuacao = Number(document.getElementById("pontuacao").value);

  if (!nome || !pontuacao) return;

  jogadores.push({ nome, pontuacao });

  renderizarRanking();

  document.getElementById("nome").value = "";
  document.getElementById("pontuacao").value = "";
}

renderizarRanking();
