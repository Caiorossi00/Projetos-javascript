const dados = [
  {
    nome: "Caio",
    email: "Caiorossi.code@gmail.com",
    senha: "1234",
  },
];

function exibirDados() {
  const usuario = dados[0];
  const dadosHTML = document.getElementById("dados");

  dadosHTML.innerHTML = `
      Nome: ${usuario.nome} <br>
      Email: ${usuario.email} <br>
      Senha: ${usuario.senha}
    `;
}

function validarDados() {
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  const resultado = document.getElementById("resultado");
  const usuario = dados[0];

  if (!nome || !email || !senha) {
    resultado.textContent = "Preencha todos os campos!";
    return;
  }

  if (nome !== usuario.nome) {
    resultado.textContent = "Nome incorreto";
    return;
  }

  if (email !== usuario.email) {
    resultado.textContent = "Email incorreto";
    return;
  }

  if (senha !== usuario.senha) {
    resultado.textContent = "Senha incorreta";
    return;
  }

  resultado.textContent = "Login aprovado";
}

exibirDados();
