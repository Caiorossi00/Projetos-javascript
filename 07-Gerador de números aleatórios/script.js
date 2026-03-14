const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function gerarNumero() {
  const quantidadeDeDigitos = Number(document.querySelector("#digitos").value);

  if (isNaN(quantidadeDeDigitos) || quantidadeDeDigitos <= 0) {
    alert("Digite um número válido.");
    return;
  }

  let numeroGerado = "";

  for (let i = 0; i < quantidadeDeDigitos; i++) {
    const indiceAleatorio = Math.floor(Math.random() * numeros.length);

    numeroGerado += numeros[indiceAleatorio];
  }

  exibirNumero(numeroGerado);
}

function exibirNumero(numeroGerado) {
  const resultado = document.querySelector("#resultado");

  resultado.textContent = numeroGerado;
}
