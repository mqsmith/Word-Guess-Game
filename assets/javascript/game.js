

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
var image = document.getElementById("image-containter");
//Variable that holds the game data


var winCount = 0;
var lossCount = 0;
var triesLeft = 10;
var wordList = ["FORD", "TOYODA", "CHEVROLET", "TESLA", "PORSCHE", "HONDA"]; //List of words for game
var imgList = ["assets/images/ford.jpg", "assets/images/toyoda.jpg", "assets/images/chevy.jpg", "assets/images/modelS.jpg", "assets/images/porsche.jpeg","assets/images/honda.jpg"]; //List image reference
var indexImg = 0;
var imageSrc = "";
var displayWord = []; //Empty list to display word as '-' and to compare with answers
var guess = []; //Empty list to hold letters that the user guessed
var rightGuess = []; //Empty list to hold letters that the user guessed right
var chosenWord;
var win = [];

window.onload = function start() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(wordList.indexOf(chosenWord));
    indexImg = wordList.indexOf(chosenWord);
    imageSrc = imgList[indexImg];
    console.log(imageSrc);
    img.style.opacity = "0.5";
    img.src=imageSrc;
    console.log(chosenWord);
    displayWord.push(chosenWord);
    console.log(displayWord);
    var blank = displayWord[0].toString()
    for (var i = 0; i < blank.length; i++) {
        displayWord[i] = "-";
    }
    console.log(displayWord);
    console.log(displayWord.join(""));
    userAnswer.textContent = displayWord.join("");
    userTries.textContent = triesLeft;
}


function checkGuess(letter) {

    //if letter is not in guess array then push the letter to the array
    if (guess.indexOf(letter) === -1) {
        guess.push(letter);
        //if the letter isn't in the answer word then -1 the tiresLeft
        if (chosenWord.indexOf(letter) === -1) {
            tiresLeft = triesLeft--;
            userTries.textContent = triesLeft;
            //if triesLeft is 3 or less then change the color
            if (triesLeft <= 3) {
                document.getElementById("tries").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "_" with the letter
        } else {
            for (var i = 0; i < chosenWord.length; i++) {
                if (letter === chosenWord[i]) {
                    displayWord[i] = letter;
                    rightGuess.push(displayWord);
                    // console.log(rightGuess);
                    console.log(displayWord);
                    userAnswer.textContent = displayWord.join("");
                }
            }
        }
        console.log(displayWord, chosenWord, win);
        console.log(rightGuess);
        win.push(chosenWord);
        if (rightGuess.length === chosenWord.length) {
            //reset the chosenWord
            // reset all associated arrays
            displayWord = []; //Empty list to display word as '-' and to compare with answers
            guess = []; //Empty list to hold letters that the user guessed
                rightGuess = []; //Empty list to hold letters that the user guessed right
                chosenWord;
                // increment wins
                winCount++;
                console.log(winCount);
                userWins.textContent = winCount;
                // reset triesLeft
                triesLeft = 10;
                document.getElementById("tries").style.color = "white";
                userTries.textContent = triesLeft;
                window.onload();
            }
        

        if (triesLeft === 0) {
            //reset chosenWord
            // reset all associated arrays
            displayWord = []; //Empty list to display word as '-' and to compare with answers
            guess = []; //Empty list to hold letters that the user guessed
            rightGuess = []; //Empty list to hold letters that the user guessed right
            chosenWord;
            //increment losses
            lossCount++;
            console.log(lossCount);
            userLoss.textContent = lossCount;
            //reset triesLeft
            triesLeft = 10;
            userTries.textContent = triesLeft;
            document.getElementById("tries").style.color = "white";
            window.onload();
        }


    }

    console.log(guess);
    userGuess.textContent = "You Guessed: " + guess;

};



document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        checkGuess(event.key.toUpperCase());
        instructions.textContent = " ";
        message.textContent = "Guess the Auto Maker!";
    }
};




