// const p1Score = document.querySelector(".player-1-score");
// const p2Score = document.querySelector(".player-2-score");

// const p1Button = document.querySelector(".player-1-button");
// const p2Button = document.querySelector(".player-2-button");

const reButton = document.querySelector(".reset-button");

const selectedOption = document.querySelector("#playto");
let selectedValue = parseInt(selectedOption.value); // Declare selectedValue outside both event listeners for global scope

// FOR GETTING THE SELECTED VALUE FROM DROPDOWN OPTIONS
selectedOption.addEventListener("change", () => {
  selectedValue = parseInt(selectedOption.value); // Update selectedValue inside this event listener
  console.log(selectedValue);
});
let isGameOver = false;

// FOR PLAYER 1 BUTTON
// let p1 = 0;
// p1Button.addEventListener("click", () => {
//   if (!isGameOver) {
//     p1++;
//     p1Score.innerText = `${p1}`;
//     if (p1 === selectedValue) {
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//       isGameOver = true;
//       p1Score.style.color = "green";
//       p2Score.style.color = "red";
//       p1Button.style.opacity = 0.5;
//       p2Button.style.opacity = 0.5;
//     }
//   }
// });

// // FOR PLAYER 2 BUTTON
// let p2 = 0;
// p2Button.addEventListener("click", () => {
//   if (!isGameOver) {
//     p2++;
//     p2Score.innerText = `${p2}`;
//     if (p2 === selectedValue) {
//       p2Button.disabled = true;
//       p1Button.disabled = true;
//       isGameOver = true;
//       p1Score.style.color = "red";
//       p2Score.style.color = "green";
//       p1Button.style.opacity = 0.5;
//       p2Button.style.opacity = 0.5;
//     }
//   }
// });
// //FOR RESET BUTTON
// reButton.addEventListener("click", () => {
//   p1Score.textContent = 0;
//   p2Score.textContent = 0;
//   p1 = 0;
//   p2 = 0; //agar ye nahi krenge to reset krne par code uske aage count krega
//   p1Button.disabled = false;
//   p2Button.disabled = false;
//   isGameOver = false;
//   p1Score.style.color = "black";
//   p2Score.style.color = "black";
//   p1Button.style.opacity = 1;
//   p2Button.style.opacity = 1;
// });

const p1 = {
  score: 0,
  displayScore: document.querySelector(".player-1-score"),
  button: document.querySelector(".player-1-button"),
};
const p2 = {
  score: 0,
  displayScore: document.querySelector(".player-2-score"),
  button: document.querySelector(".player-2-button"),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    player.displayScore.innerText = `${player.score}`;
    if (player.score === selectedValue) {
      player.button.disabled = true;
      opponent.button.disabled = true;
      isGameOver = true;
      player.displayScore.style.color = "red";
      opponent.displayScore.style.color = "green";
      player.button.style.opacity = 0.5;
      opponent.button.style.opacity = 0.5;
    }
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

reButton.addEventListener("click", () => {
  // p1.displayScore.textContent = 0;
  // p2.displayScore.textContent = 0;
  // p1.score = p2.score = 0;
  // p1.button.disabled = false;
  // p2.button.disabled = false;
  // isGameOver = false;
  // p1.displayScore.style.color = "black";
  // p2.displayScore.style.color = "black";
  // p1.button.style.opacity = 1;
  // p2.button.style.opacity = 1;

  // ALL OF THE ABOVE CAN BE WRITTEN AS
  for (let p of [p1, p2]) {
    // ITERATES OVER THE ARRAY CONATINING [P1 AND P2]
    //firstly loop will iterate for p1 i.e all of the inner code will run for p1 and then p2
    p.displayScore.textContent = 0;
    p.score = 0;
    p.button.disabled = false;
    isGameOver = false;
    p.displayScore.style.color = "black";
    p.button.style.opacity = 1;
  }
});
