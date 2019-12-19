
// guess value and value used to restart the game along with initial display command
var guess = 15;
var totalGuess = 15;
$("#guess").text(guess);

var oldGuess = [];

var allWords = ["Banana","Orange","Guava","Strawberry"];

// keeps html updated
function updateHTML() {
    
    $("#guess").text(guess);
    $("#oldGuess").text(oldGuess);

};

// restarts Gamepad, having issues chosing new word it was working earlier
function reStart(){
    guess = totalGuess
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
    document.onkeyup = function(letter){

        guess--;
        console.log(guess);

        oldGuess.push(letter)

        // it needs to check if the key is from the alphabet
        // it needs to check if its been pressed before
        // push old wrong keys into the oldGuess array


        // a victory condition somehow

        // loss statement
        if (guess === 0){
            alert("you lose!")
        }

        updateHTML();

    };
});