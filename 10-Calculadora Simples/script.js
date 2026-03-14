function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function dividir(n1, n2) {
  if (n2 === 0) {
    alert("Não é possível dividir por zero");
    return null;
  }

  return n1 / n2;
}

function calcular(operacao) {
  const n1 = Number(document.querySelector("#n1").value);
  const n2 = Number(document.querySelector("#n2").value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Digite números válidos");
    return;
  }

  let resultado;

  if (operacao === "somar") {
    resultado = somar(n1, n2);
  }

  if (operacao === "subtrair") {
    resultado = subtrair(n1, n2);
  }

  if (operacao === "multiplicar") {
    resultado = multiplicar(n1, n2);
  }

  if (operacao === "dividir") {
    resultado = dividir(n1, n2);
  }

  document.querySelector("#resultado").textContent = "Resultado: " + resultado;
}
