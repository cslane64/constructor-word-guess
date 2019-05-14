This is a Node.js Command Line Interface (CLI) Word Guessing Game built using constructors. 

The index.js runs contains the game logic and depends on the word.js, which also Letter.js constructor.

The game starts with a random word selected from an array of NFL football teams.
The team name is displayed in the terminal with an underscore representing each letter and a space between each letter which allows the 
user to count the number of letters in each word. The space between the word is a double space to cleary distinguish between the 
two or three words.
The player is prompted for a letter.
If the player guesses correctly, the letter is revealed in the terminal in the appropriate spot in the word(s).
If the player guesses incorrectly, failed attemts, which the user has 8,  are reduced by one

When the player failed attempts reaches zero the game is over.
The player is asked if he would like to play again.

When the player guesses the word correctly, the player wins and a point is added to their points total.
The game automatically reloads a new word for player to guess.
If the player gets 5 points (5 teams guessed correctly) they are congratulated that they have won.

They are promted whether or not they woould like to play again. 
If yes, the game starts again and the players points are reset to zero.
If no, the gamne ends.

Technologies Used
Node.js
JavaScript
Inquirer
Colors (my new favorite npm package!

