var Letter = require("./letter.js");
// word constructor
var Word = function(word){
    this.buildWord = function(word) {
        var letterStore = [];
        for( var i; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            letterStore.push(currentLetter);
        }
        return letterStore;
    }

    this.letter = this.buildWord(word);
    this.chosenWord = word;
    this.checkGuess = function(guess) {
        for(var i = 0; i < this.letter.length; i++) {
            this.letter[i].letterGuess(guess);
        }
    }

    this.display = function() {
        var letterStore = '';
        for(var i = 0; i < this.letter.length; i++) {
            letterStore += this.letter[i].display();
        }
        return letterStore
    }
    
}


module.exports = Word;