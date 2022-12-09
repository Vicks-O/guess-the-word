const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";

// Display symbols as placeholders for the letters of selected word

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }

  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder (word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Empty message paragraph
  message.innerText = "";
  // Let's grab what was entered in the input
  const guess = letterInput.value;
  // Let's make sure that it is a single letter
  const goodGuess = validateInput(guess);
  if (goodGuess) {
    //We've got a letter1 Let's guess!
    makeGuess(guess);
  }
  letterInput.value = "";
});


const validateInput = function (input){
  const acceptedLetter = /[a-zA-Z]/
  if (input.length === 0) {
    //Is input empty?
    message.innerText = "Please enter a letter.";
}  else if (input.length > 1) {
  //Did you enter more than one letter?
  message.innerText = "Please enter a single letter."
}  else if (!input.match(acceptedLetter)){
  //Did you enter a number, a special character or symbol?
  message.innerText = "Please enter a letter from A to Z";
 } else {
  // You typed a letter ! Great!
  return input;
 }
};
  const makeGuess = function (guess){
    guess = guess.toUpperCase();
    if (guessedLettersElement.includes(guess)){
    message.innerText = "You guessed that letter already, try again.";
    } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
