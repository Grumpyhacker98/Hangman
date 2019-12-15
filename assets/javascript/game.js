var wins = document.getElementById("#wins")
var wins = 0

var guess = document.getElementById("#guess")
var guess = 15

var allWords = ["Banana","Orange","Guava","Strawberry"]

var chosenWord = document.getElementById("#chosenWord")

var oldGuess = document.getElementById("#oldGuess")

var start = document.getElementById("#start")

// once the page is loaded you can do everything in this
$(document).ready(function() {

    // (re)start the game, guesses a new word and resets the page
    // currently broken
    $(start).on("click", function() {

        // chose word to start game
        chosenWord = [Math.floor(Math.random() * allwords.length)]
        console.log(chosenWord)
        targetDiv.textContent = chosenWord;
        $("#start").text(chosenWord)

        // resetpage bit

    });

    // something to record keypresses

        // if its the right key uncover the hidden word
        // add the letter to the usedword array

        // if it isnt part of the word then
        // add the letter to the usedword array
        // take away one of the guesses left

        // if its a already used word or a unacceptable key give them a warning


    // if their avaible guesses go out

        // they get an alert saying they suck
        // the page resets 

    
    







})