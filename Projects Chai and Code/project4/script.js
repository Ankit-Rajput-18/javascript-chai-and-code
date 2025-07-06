let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const loworhi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("enter  the number greater than 1");
  } else if (guess > 100) {
    alert("enter  the number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage( `game over, you have used all your guesses ${randomNumber} was the number`);
      endGame();
    }
    else{
        checkGuess(guess);
        displayGuess(guess);
    }
  }
}

function checkGuess(guess) {

    if(guess === randomNumber) {
        displayMessage("Congratulations! You got it right!");
        endGame();
    }
    if(guess < randomNumber){
        displayMessage("your guess is to low");
    }
     if(guess > randomNumber){
        displayMessage("your guess is to high");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  ,   `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} guesses left`;
}

function displayMessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled" ,  "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
    startover.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
        newGameButton.addEventListener("click", function () {
            randomNumber = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            numGuess = 1;
            guessSlot.innerHTML = "";
            remaining.innerHTML = `${11 - numGuess} `;
            userInput.removeAttribute("disabled");
            startover.removeChild(p);
            playGame = true;
        });
    }
