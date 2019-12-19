
var guess = 0
var totalGuess = 15

var allWords = ["Banana","Orange","Guava","Strawberry"]
var chosenWord = [Math.floor(Math.random() * allWords.length)]

// a function that runs and updates the html with new javascript
function updateHTML() {
    wins = document.getElementById("#wins")
    guess = document.getElementById("#guess")
    allWords[chosenWord] = document.getElementById("#chosenWord")
    oldGuess = document.getElementById("#oldGuess")
};

// reset game function run when button clicked or on loss
function reset() {
    wins = 0
    guess = totalGuess
    chosenWord = [Math.floor(Math.random() * allWords.length)]
    console.log(allWords[chosenWord])
    // $("#chosenWord").text(allWords[chosenWord])
    // $(allWords[chosenWord]).appendto("#chosenWord")
    // allWords[chosenWord] = document.getElementById("#chosenWord")
}

// once the page is loaded you can do everything in this
$(document).ready(function() {

    // (re)start the game, guesses a new word and resets the page
    $("#start").on("click", function() {

        reset()
        updateHTML()
        // // chose word to start game
        // chosenWord = [Math.floor(Math.random() * allWords.length)]
        // console.log(chosenWord)
        // $("#chosenWord").textContent = chosenWord;
        // // $("#start").text(chosenWord)

    });

    // something to record keypresses

        // if its the right key uncover the hidden word
        // add the letter to the usedword array

        // if it isnt part of the word then
        // add the letter to the usedword array
        // take away one of the guesses left

        // if its a already used word or a unacceptable key give them a warning



    // the defeat if statement
    if ( guess = 0 ) {
        alert("You Lost!")
        reset()
        updateHTML()
        // reset function needed
    }
    
    







})