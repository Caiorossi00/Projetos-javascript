const nomes = [
  "Caio",
  "Carlos",
  "Camila",
  "Carolina",
  "Catarina",
  "Lucas",
  "Luana",
  "Leonardo",
  "Larissa",
  "Pedro",
  "Paulo",
  "Patricia",
];

const input = document.getElementById("busca");
const lista = document.getElementById("sugestoes");

input.addEventListener("input", () => {
  const valor = input.value.toLowerCase();

  lista.innerHTML = "";

  if (!valor) return;

  const filtrados = nomes.filter((nome) => nome.toLowerCase().includes(valor));

  filtrados.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;

    li.addEventListener("click", () => {
      input.value = nome;
      lista.innerHTML = "";
    });

    lista.appendChild(li);
  });
});
