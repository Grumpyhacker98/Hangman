
var wins = 0

var guess = 15

var allWords = ["Banana","Orange","Guava","Strawberry"]

// a function that runs and updates the html with new javascript
function updateHTML() {
    var wins = document.getElementById("#wins")
    var guess = document.getElementById("#guess")
    var chosenWord = document.getElementById("#chosenWord")
    var oldGuess = document.getElementById("#oldGuess")
};

// reset game function run when button clicked or on loss
function reset() {
    var wins = 0
    var guess = 15
    var chosenWord = [Math.floor(Math.random() * allwords.length)]
}

// temporary
function wordGen() {
    chosenWord = [Math.floor(Math.random() * allWords.length)]
    console.log(chosenWord)
}

// once the page is loaded you can do everything in this
$(document).ready(function() {

    // (re)start the game, guesses a new word and resets the page
    $(start).on("click", function() {

        // chose word to start game
        chosenWord = [Math.floor(Math.random() * allWords.length)]
        console.log(chosenWord)
        $("#chosenWord").textContent = chosenWord;
        // $("#start").text(chosenWord)

        // resetpage bit

        updateHTML()

    });

    // something to record keypresses

        // if its the right key uncover the hidden word
        // add the letter to the usedword array

        // if it isnt part of the word then
        // add the letter to the usedword array
        // take away one of the guesses left

        // if its a already used word or a unacceptable key give them a warning



    // the defeat if statement
    if ( guess < 0 ) {
        alert("You Lost!")
        updateHTML()
        // reset function needed
    }
    
    







})