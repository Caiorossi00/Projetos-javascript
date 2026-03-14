let tempo = 60;
let timerId = null;

const botao = document.getElementById("start");

botao.addEventListener("click", startTimer);

function startTimer() {
  if (timerId !== null) return;

  const timerElement = document.getElementById("timer");

  tempo = Number(document.querySelector("#tempo").value);

  timerId = setInterval(() => {
    if (tempo > 0) {
      tempo--;
      timerElement.textContent = tempo;
    } else {
      clearInterval(timerId);
      timerId = null;
      alert("Tempo esgotado!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;

  tempo = 60;

  const timerElement = document.getElementById("timer");
  timerElement.textContent = tempo;
}
