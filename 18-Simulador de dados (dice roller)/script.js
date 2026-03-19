const dado = [1, 2, 3, 4, 5, 6];

function rolarDado() {
  const rolls = Number(document.querySelector("#rolls").value);
  const resultados = document.querySelector("#resultado");

  let resultadoFinal = "";

  for (let i = 0; i < rolls; i++) {
    const randomIndex = Math.floor(Math.random() * dado.length);
    const ladoSorteado = dado[randomIndex];

    resultadoFinal += ladoSorteado + " ";
  }

  resultados.textContent = resultadoFinal;
}
