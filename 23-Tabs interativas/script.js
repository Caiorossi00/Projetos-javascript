let tabAtiva = "filmes";

const catalogo = {
  filmes: ["Interestelar", "Matrix", "O Senhor dos Anéis"],
  livros: ["1984", "Dom Casmurro", "O Hobbit"],
  jogos: ["The Witcher 3", "GTA V", "Elden Ring"],
};

function renderizarTab() {
  const display = document.querySelector("#display");
  const itens = catalogo[tabAtiva];

  const html = itens.map((item) => `<p>${item}</p>`).join("");
  display.innerHTML = html;

  atualizarBotaoAtivo();
}

function trocarTab(novaTab) {
  if (!catalogo[novaTab]) return;

  tabAtiva = novaTab;
  renderizarTab();
}

function atualizarBotaoAtivo() {
  const botoes = document.querySelectorAll(".tab-btn");

  botoes.forEach((btn) => {
    btn.classList.remove("ativa");

    if (btn.textContent.toLowerCase() === tabAtiva) {
      btn.classList.add("ativa");
    }
  });
}

renderizarTab();
