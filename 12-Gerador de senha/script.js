function gerarSenha() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVXWYZ123456789";
  const numeroDeCaracteres = Number(
    document.querySelector("#caracteres").value
  );

  if (numeroDeCaracteres < 6) {
    window.alert("Insira um número maior que 6");
    return;
  }

  let senha = "";

  for (let i = 0; i < numeroDeCaracteres; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  return senha;
}

function exibirSenha() {
  const resultado = document.querySelector("#resultado");
  const senha = gerarSenha();

  if (!senha) return;

  resultado.textContent = senha;
}
