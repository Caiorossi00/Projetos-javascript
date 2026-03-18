const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numeroMagico = null;

function gerarNumeroMagico() {
  const randomIndex = Math.floor(Math.random() * numeros.length);
  numeroMagico = numeros[randomIndex];
}

function checarPalpite(palpiteJogador) {
  if (palpiteJogador === numeroMagico) {
    return "Você venceu!";
  } else {
    return "Você perdeu! Número mágico era: " + numeroMagico;
  }
}

function jogar() {
  const input = document.getElementById("palpite");
  const palpiteJogador = Number(input.value);

  if (!palpiteJogador || palpiteJogador < 1 || palpiteJogador > 9) {
    alert("Digite um número entre 1 e 9!");
    return;
  }

  gerarNumeroMagico();

  const mensagem = checarPalpite(palpiteJogador);

  const resultado = document.getElementById("resultado");
  resultado.textContent = mensagem;
}
