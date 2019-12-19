
// guess value and value used to restart the game along with initial display command
var guess = 15;
var totalGuess = 15;
$("#guess").text(guess);

var oldGuess = [];

var allWords = ["Banana","Orange","Guava","Strawberry"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// keeps html updated
function updateHTML() {
    
    $("#guess").text(guess);
    $("#oldGuess").text(oldGuess);

};

// restarts Gamepad, having issues chosing new word it was working earlier
function reStart(){
    // other reset stuff
    guess = totalGuess
    oldGuess = [];

    // guesses new word
    var chosenWord = [Math.floor(Math.random() * allWords.length)];
    $("#chosenWord").text(allWords[chosenWord]);
    console.log(allWords[chosenWord]);
};

$(document).ready(function() {

    // (re)start button
    $("#start").on("click", function() {
        reStart()
        updateHTML();
    });

    // when key is pressed most logic happens
    document.onkeyup = function(event){

        // it needs to check if the key is from the alphabet
        // it needs to check if its been pressed before

        // creates variable to contain the event key then pushes it into the oldguess array
        var currentGuess = event.key;
        oldGuess.push(" " + currentGuess);

        guess--;

        // a victory condition somehow

        // loss statement
        if (guess === 0){
            alert("you lose!")
        }

        updateHTML();

    };
});