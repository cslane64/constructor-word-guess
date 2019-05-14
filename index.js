var inquirer = require("inquirer");

var Word = require("./Word.js");
var colors = require('colors');

var guesses = 8;
var points = 0;

var wordsToGuess = [
    "Atlanta Falcons","Arizona Cardinals","Baltimore Ravens","Buffalo Bills","Carolina Panthers",
    "Chicago Bears", "Cincinnati Bengals","Cleveland Browns","Dallas Cowboys","Denver Broncos",
    "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts","Jacksonville Jaquars",
    "Kansas City Chiefs", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings",
    "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Oakland Raiders",
    "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks",
    "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];
var randomWord;
var chosenWord;

function startGame() {

    console.log("Guess the NFL Team".blue);
}

function chooseRandomWord() {

    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]

    chosenWord = new Word(randomWord);
}

function guessWord() {

    if (guesses > 0 && points < 5) {

        console.log(chosenWord.display().green);
        
        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter!".magenta,
                validate: function (str) {
                    if (str.length != 1) return false;
                    var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                    return regEx.test(str);
                }

            }

        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;

            chosenWord.checkGuess(guess);

            if (randomWord.toLowerCase().indexOf(guess.toLowerCase()) === -1) {
                guesses--;
                console.log("INCORRECT! " + guesses + " guesses remaining".red)
            } 
            else {
                if (points < 5) {
                console.log("CORRECT!".green)
                }
            }
            // replaced single space with double space so formating
            // done in letter.js matched the random word for a win.
            
            var randomWordMod = randomWord.replace(" ", "  ");
            if (randomWordMod === chosenWord.display()) {
                
                console.log(chosenWord.display());
                guesses = 8;
                points++;

                if (points < 5) {
                    console.log("CORRECT! Next team!".green);
                    console.log("You have " + points + " point(s)!");
                    chooseRandomWord();
                }

                else {
                    winGame();
                }
            }

            if (guesses === 0) {
                loseGame();
            }

            guessWord();

        });
    }

}

function loseGame() {
    console.log(("GAME OVER!").red);
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                points = 0;
                chooseRandomWord();
                guessWord();
            }
            else {
                console.log("Ok, thanks for plahying".blue);
                process.exit();
            }
        })
}

function winGame() {

    console.log('YOU WIN!');
        


    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                points = 0;
                chooseRandomWord();
                guessWord();
            }
            else {
                console.log("You did an amazing job, come back soon and play again.".blue)
                process.exit();
            }
        })

}

startGame();
chooseRandomWord();
guessWord();