const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach((pergunta) => {
  const resposta = pergunta.nextElementSibling;
  resposta.style.display = "none";

  pergunta.addEventListener("click", () => {
    if (resposta.style.display === "block") {
      resposta.style.display = "none";
    } else {
      resposta.style.display = "block";
    }
  });
});
