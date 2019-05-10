var Word = require("./word.js");
var inquirer = require("inquirer");
var colors = require("colors");

var guesses = 8;
var points = 0;

var wordsToGuess = ["Boston Red Sox", "New England Patriots", "Boston Bruins", "Boston Celtics", "New England Revolution"];
var randomWord;
var chosenWord;

function startGame() {
    console.log("Try to guess the sports team name".green);
}

function chooseRandomWord(){
    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]
    chosenWord = new Word(randomWord);
}

function guessWord() {
    if (guesses > 0 && points < 5) {
        console.log(chosenWord.display().blue);

        inquirer.prompt([
            {
            name: "txt",
            message: "Guess a letter",
            validate: function(str){
                if(str.length != 1) return false;
                var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                return regEx.test(str);
                }
            }
        ]).then (function (guessedLetter) {
            var guess = guessedLetter.txt;
            chosenWord.checkGuess(guess);

            if(randomWord.toLowerCase().indexOf(guess.toLowerCase()) === -1) {
                guesses--
                console.log("INCORRECT!" + guesses + "guesses left.".red);
            } else {
                if(points < 5) {
                    console.log("CORRECT!".green);
                }
            }

            if (randomWord === chosenWord.display()) {
                console.log(chosenWord.dsiplay().blue);
                guesses = 10;
                point++

                if(points < 5) {
                    console.log("CORRECT. Next Team".green);
                    chooseRandomWord();
                } else {
                    winGame();
                }
            }
            guessWord();
        });
    }
}

function loseGame() {
    console.log("GAME OVER".red);
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play Again?",
            default: true
        }
    ]).then(function(inquirerResponse){
        if (inquirerResponse.comfirm) {
            guesses = 8;
            points = 0;
            chooseRandomWord();
            guessWord();
        } else {
            console.log("OK, I did not get your response".grey)
            process.exit();

        }
    })
}

function winGame() {
    console.log("YOU WIN!!!!".green);
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play Again?",
            default: true
        }
    ]).then(function(inquirerResponse){
        if (inquirerResponse.comfirm) {
            guesses = 8;
            points = 0;
            chooseRandomWord();
            guessWord();
        } else {
            console.log("OK, Have a nice day".purple)
            process.exit();

        }
    })

}

startGame();
chooseRandomWord();
guessWord();