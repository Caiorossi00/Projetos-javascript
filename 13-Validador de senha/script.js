const inputSenha = document.querySelector("#senha");

const regras = {
  tamanho: {
    element: document.querySelector("#tamanho"),
    validar: (senha) => senha.length >= 6,
  },
  numero: {
    element: document.querySelector("#numero"),
    validar: (senha) => /[0-9]/.test(senha),
  },
  maiuscula: {
    element: document.querySelector("#maiuscula"),
    validar: (senha) => /[A-Z]/.test(senha),
  },
  simbolo: {
    element: document.querySelector("#simbolo"),
    validar: (senha) => /[^A-Za-z0-9]/.test(senha),
  },
};

inputSenha.addEventListener("input", validarSenha);

function validarSenha() {
  const senha = inputSenha.value;

  for (const regra in regras) {
    const valido = regras[regra].validar(senha);
    const elemento = regras[regra].element;

    if (valido) {
      elemento.classList.remove("erro");
      elemento.classList.add("ok");
    } else {
      elemento.classList.remove("ok");
      elemento.classList.add("erro");
    }
  }
}
