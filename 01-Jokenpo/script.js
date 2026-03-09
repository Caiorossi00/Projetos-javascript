const choices = ["pedra", "papel", "tesoura"];

let playerChoice = "";
let computerChoice = "";

const score = {
  player: 0,
  cpu: 0,
  draws: 0,
};

function generateComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

function compareChoices() {
  if (playerChoice === computerChoice) {
    score.draws++;
    return "Empate!";
  }

  if (
    (playerChoice === "pedra" && computerChoice === "tesoura") ||
    (playerChoice === "papel" && computerChoice === "pedra") ||
    (playerChoice === "tesoura" && computerChoice === "papel")
  ) {
    score.player++;
    return "Você ganhou!";
  }

  score.cpu++;
  return "Computador ganhou!";
}

function playRound(choice) {
  playerChoice = choice;
  generateComputerChoice();

  const result = compareChoices();

  renderResult(result);
  renderScores();
}

function renderResult(result) {
  document.querySelector(
    "#result"
  ).textContent = `Jogador: ${playerChoice} | CPU: ${computerChoice} - ${result}`;
}

function renderScores() {
  document.querySelector(
    "#scores"
  ).textContent = `Placar - Jogador: ${score.player} | CPU: ${score.cpu} | Empates: ${score.draws}`;
}

function initGame() {
  document
    .querySelector("#rock")
    .addEventListener("click", () => playRound("pedra"));
  document
    .querySelector("#paper")
    .addEventListener("click", () => playRound("papel"));
  document
    .querySelector("#scissors")
    .addEventListener("click", () => playRound("tesoura"));
}

function resetScore() {
  score.player = 0;
  score.cpu = 0;
  score.draws = 0;
  renderScores();
}

initGame();
renderScores();
