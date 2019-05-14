

var Letter = function (character) {
    this.character = character;
    this.isLetterGuessed = false;

    this.letterGuess = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.isLetterGuessed = true;
        }
    }

    this.display = function () {
        if (this.character == ' ') {

            return ('  '); //extra space to seperate the words better

        } else if (this.isLetterGuessed) {

            return (this.character);

        } else if (this.isLetterGuessed === false) {

            return ("__ "); // added extra line and space for better readability
        }
    }

    
}

module.exports = Letter;
