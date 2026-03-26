let estado = "claro";

const botao = document.querySelector("#changeBG");

botao.addEventListener("click", toggle);

function toggle() {
  estado = estado === "claro" ? "escuro" : "claro";
  adjustBackground();
}

function adjustBackground() {
  const body = document.body;

  if (estado === "claro") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
}
