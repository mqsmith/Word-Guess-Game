

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
var loseCount = 0;
var triesLeft = 10;
var wordList = ["Ford", "Toyoda", "Chevrolet", "Tesla", "Prosche", "Honda"]; //List of words for game
var imgList = []; //List image reference
var answers = "";
var imageSrc = "";
var displayWord = []; //Empty list to display word as '-' and to compare with answers
var wrongGuess = []; //Empty list to hold letters that the user guessed wrong
var rightGuess = []; //Empty list to hold letters that the user guessed right

window.onload = function () {
    var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(chosenWord)
    displayWord.push(chosenWord);
    console.log(displayWord);
}
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var keyPush = event.key;
    userAnswer.textContent = displayWord;
    instructions.textContent = " ";
    message.textContent = "Guess the Auto Maker!";
    var blank = displayWord[0].toString()
    console.log(blank);
}

document.onkeyup = function (event) {
    var keyPush = event.key;
    if (userGuess !== computerGuess) {
        triesLeft--;
        console.log("Number of Losses " + numberOfLosses);
        var losses = document.getElementById("losses");
        losses.textContent = "Number of Losses: " + numberOfLosses;
        var wins = document.getElementById("wins");
        wins.textContent = "Number of Wins: " + numberOfWins;
        var guesses = document.getElementById("guesses");
        guesses.textContent = "Number of Guesses Remaining: " + numberOfGuesses;
        var remaining = document.getElementById("soFar");
        remaining.textContent = "Your Guesses so Far: " + guessesSoFar;
        console.log(guessesSoFar);
        guessesSoFar.push(userGuess);
        if (numberOfGuesses === 0) {
            alert("Game Over!");
            numberOfGuesses = 15;
            numberOfLosses = 0;
            numberOfWins = 0;
            guessesSoFar = [];
        };
    }
}

   





