// words list
var words = ["FORD", "HONDA", "TESLA", "CHEVROLET", "TOYODA", "BMW"];

var maxNumGuesses = 8; // max number of guesses 
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var ansWord; // the word that is being played

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];
    console.log(ansWord);

    ansWordArr = [];

    // adds "-" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "-";
        console.log(ansWordArr);
    }

    // reset the variables 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];
};

document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            // updateScreen();
            // isWinner();
            // isLoser();
        }
    }
};

function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color
            if (numGuessesRemaining <=3) {
                document.getElementById("tries").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "-" with the letter
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

};
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf("-") === -1) {
        numWins++;
        isFinished = true;
        //if the answer is guessed then play assigned gif
        if(ansWord === "FORD") {
            document.getElementById("picture").src = "https://giphy.com/embed/w7iOaLoi84N6E";
        } else if (ansWord === "HONDA") {
            document.getElementById("picture").src = "https://giphy.com/embed/3x5V8j8T341lS";
        } else if (ansWord === "TOYODA") {
            document.getElementById("picture").src = "https://giphy.com/embed/TdfyKrN7HGTIY";
        } else if (ansWord === "CHEVROLET") {
            document.getElementById("picture").src = "https://giphy.com/embed/xuXzcHMkuwvf2";
        } else if (ansWord === "BMW") {
            document.getElementById("picture").src = "https://giphy.com/embed/Vpu0dyuOVbrBC";
        } else if (ansWord === "TESLA") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/ENjchsyk8aSoE";
        }
            
    }
};
//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //play the loser gif
        document.getElementById("picture").src = "https://giphy.com/embed/3oFzmko6SiknmpR2NO";
        document.getElementById("tries").style.color = "#e12d2e";
    }

};

