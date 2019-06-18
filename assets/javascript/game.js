

//HTML hookup variables
var userGuess = document.getElementById("userGuess"); //TODO link to show past wrong guess
var userAnswer = document.getElementById("userAnswer"); //TODO link to show users right guesses
var userWins = document.getElementById("win");
var userLoss = document.getElementById("lose");
var userTries = document.getElementById("tries");
var instructions = document.getElementById("instructions");
var img = document.getElementById("picture");
var message = document.getElementById("message");
var inputField = document.getElementById("textInput");

//Variable that holds the game data


var winCount = 0;
var lossCount = 0;
var triesLeft = 10;
var wordList = ["FORD", "TOYODA", "CHEVROLET", "TESLA", "PORSCHE", "HONDA"]; //List of words for game
var imgList = []; //List image reference
var answers = "";
var imageSrc = "";
var displayWord = []; //Empty list to display word as '-' and to compare with answers
var guess = []; //Empty list to hold letters that the user guessed wrong
var rightGuess = []; //Empty list to hold letters that the user guessed right
var chosenWord;

window.onload = function () {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(chosenWord)
    displayWord.push(chosenWord);
    console.log(displayWord);
    var blank = displayWord[0].toString()
    for (var i = 0; i < blank.length; i++) {
        displayWord[i] = "-";
    }
    console.log(displayWord);
    userAnswer.textContent = displayWord;
    userTries.textContent = triesLeft;
}
// document.onkeydown = function (event) {
//     // Determines which key was pressed.
//     var keyPush = event.key;

//     instructions.textContent = " ";
//     message.textContent = "Guess the Auto Maker!";
// }

function checkGuess(letter) {
    
        //if letter is not in guessedLetters array then push the letter to the array
        if (guess.indexOf(letter) === -1) {
            guess.push(letter);
            //if the letter isn't in the answer word then -1 the numGuessesRemaining
            if (chosenWord.indexOf(letter) === -1) {
                tiresLeft = triesLeft--;
                userTries.textContent = triesLeft;
                //if numGuessesRemaining is 3 or less then change the color
                if (triesLeft <=3) {
                    document.getElementById("tries").style.color = "#e12d2e";
                }
                //if letter is in answer then replace the positioned "_" with the letter
            } else { 
                for (var i = 0; i < chosenWord.length; i++) {
                    if (letter === chosenWord[i]) {
                        displayWord[i] = letter;
                        console.log(displayWord[i]);
                        userAnswer.textContent = displayWord[i];
                    } 
                }                
            }
        }
    console.log(guess);
    userGuess.textContent = "You Guessed: " + guess;
    
};

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        checkGuess(event.key.toUpperCase());
    }
};




