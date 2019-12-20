
var guess = 15;
var totalGuess = 15;

var allWords = ["Banana","Orange","Guava","Strawberry"];
var chosenWord = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var oldGuess = [];

// keeps html updated
function updateHTML() {
    
    $("#guess").text(guess);
    $("#oldGuess").text(oldGuess);

};


$(document).ready(function() {

    // (re)start button
    $("#start").on("click", function() {
        // other reset stuff
        guess = totalGuess;
        oldGuess = [];
        
        // guesses new word
        chosenWord = [];
        var wordChoice = [Math.floor(Math.random() * allWords.length)];
        chosenWord.push(allWords[wordChoice]);
        $("#chosenWord").text(chosenWord);

        updateHTML();
    });

    // when key is pressed most logic happens
    document.onkeyup = function(event){
        var currentGuess = event.key;



        // experimental code

        // loop through the word and check every character
        for (var i=0, j=chosenWord.length; i<j; i++) {

            if (true){
                console.log("placeholder so guess attempts work")
                guess--;
                oldGuess.push(currentGuess);
            }

            // correct guess if statement is just a congrats alert right now
            if (currentGuess == chosenWord[i]){
                console.log("you got this one right!");
                guess--;
                oldGuess.push(currentGuess);
            };

            // only alphabet characters are accepted
            //  might need to nest the entire for loop in this
            if(!currentGuess == letters){
                console.log("thats not part of the alphabet!");
            };

            // ensures you dont press the same key twice
            if (currentGuess == oldGuess){
                console.log("you pressed the "+currentGuess+" key twice!");
            };

            // wrong guess if statement
            if (!currentGuess === chosenWord[i]){
                console.log("wrong!");
                guess--;
                oldGuess.push(currentGuess);
            };
            
        };

        


        // experimental code ends



        // a victory condition somehow

        // loss statement
        if (guess === 0){
            alert("you lose!");
        };

        updateHTML();

    };
});