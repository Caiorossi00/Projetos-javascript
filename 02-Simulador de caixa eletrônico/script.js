let saldoTotal = 1000;

const notas = [100, 50, 20, 10, 5, 2, 1];

function atualizarSaldoNaTela() {
  document.getElementById("saldo").textContent = `R$ ${saldoTotal}`;
}

function mostrarNotas(distribuicao) {
  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";

  distribuicao.forEach((item) => {
    if (item.quantidade > 0) {
      const li = document.createElement("li");
      li.textContent = `${item.quantidade} nota(s) de R$${item.nota}`;
      lista.appendChild(li);
    }
  });
}

function menorNumeroDeNotas(valor) {
  let restante = valor;
  const distribuicao = [];

  for (let i = 0; i < notas.length; i++) {
    let quantidade = Math.floor(restante / notas[i]);
    restante -= quantidade * notas[i];

    distribuicao.push({
      nota: notas[i],
      quantidade: quantidade,
    });
  }

  return distribuicao;
}

function sacar() {
  const saque = parseInt(document.getElementById("valor").value);

  if (isNaN(saque) || saque <= 0) {
    alert("Digite um valor válido.");
    return;
  }

  if (saque > saldoTotal) {
    alert("Saldo insuficiente.");
    return;
  }

  const distribuicao = menorNumeroDeNotas(saque);

  saldoTotal -= saque;
  atualizarSaldoNaTela();
  mostrarNotas(distribuicao);
}

function depositarPrompt() {
  const valor = parseInt(document.getElementById("valor").value);

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido.");
    return;
  }

  saldoTotal += valor;
  atualizarSaldoNaTela();
}

atualizarSaldoNaTela();
