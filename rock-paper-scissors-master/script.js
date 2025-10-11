const choices = document.querySelectorAll(".choice");
const scoreEl = document.getElementById("score");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.getElementById("play-again");

const rulesBtn = document.getElementById("rules-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

let score = 0;

const options = ["rock", "paper", "scissors"];

function getHousePick() {
  return options[Math.floor(Math.random() * options.length)];
}

function getWinner(userChoice, houseChoice) {
  if (userChoice === houseChoice) return "draw";
  if (
    (userChoice === "rock" && houseChoice === "scissors") ||
    (userChoice === "paper" && houseChoice === "rock") ||
    (userChoice === "scissors" && houseChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const houseChoice = getHousePick();
    const result = getWinner(userChoice, houseChoice);

    if (result === "win") {
      score++;
      resultText.textContent = `You Win! 🎉 (${userChoice} beats ${houseChoice})`;
    } else if (result === "lose") {
      score--;
      resultText.textContent = `You Lose 😢 (${houseChoice} beats ${userChoice})`;
    } else {
      resultText.textContent = `It's a Draw 🤝 (both chose ${userChoice})`;
    }

    scoreEl.textContent = score;
    resultDiv.classList.remove("hidden");
  });
});

playAgainBtn.addEventListener("click", () => {
  resultDiv.classList.add("hidden");
});

// Rules Modal
rulesBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
