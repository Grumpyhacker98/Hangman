
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


// =====================================================================
// =====================================================================

const inquirer = require('inquirer');

var ConvertToPuzzle = require("./constructors.js");

// word bank
var words = ["conundrum","implication","onamonapia"]

const maxCount = 7


// (re)start game prompt
function startGame(){
    console.log("=================================")
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you wish to play a game of hangman?",
            name: "data"
        }
    ]).then(function (response) {
        // setup game
        if(response.data){
            // generate new word constructor from word array index
            word = new ConvertToPuzzle(words[Math.floor(Math.random() * 3)])
            count = maxCount
            guessArr = []
            console.log("you can type 'exit' to leave")
            console.log("=================================")
            word.print()
            console.log("=================================")
            askQuestion()
        }else{
            // exit program
            console.log("take care!")
            console.log("=================================")
            return false;
        }
    });
}

// game cycle, asks questions until counter variable is 0
function askQuestion() {

    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter >",
            name: "data"
        }
    ]).then(function (response) {
        guess = response.data.toLowerCase()
        
        // to leave at any time
        if(guess==="exit"){
            console.log("take care!")
            console.log("=================================")
            return false;
        }
        
        // reasks question if guess is longer than 1 character or non alphabet or empty
        if(guess.length>1||!/^[a-z]*$/g.test(guess)||guess===" "){
            console.log("unacceptable guess")
            console.log("=================================")
            askQuestion()
            return false;
        }

        // checks to see if letter has been guessed b4 to prevent unneccisary counter losses
        for(var i=0;i<guessArr.length;i++){
            if(guess===guessArr[i]){
                console.log("You have guessed this choice before")
                console.log("=================================")
                askQuestion()
                return false;
            }
        }

        // runs guess function if it returns true even once it will console log Correct statement
        if(word.guess(guess)){
            console.log("Correct")
        }else{
            console.log("Incorrect")
            guessArr.push(guess)
            count--;
        }

        console.log("Wrong tries: "+guessArr)
        word.print()

        // if all letter.bool values are true then it will return true and run victory
        if(word.winCon()){
            console.log("=================================")
            console.log("Congratulations! You Won!")
            console.log("The word was: "+word.word)
            startGame()
            return false;
        }

        console.log("Attempts left: "+count)
        console.log("=================================")

        // reAsk askquestion()
        if(count>0){
            askQuestion()
        }else{
            console.log("Sorry, but you lost!")
            console.log("The word was: "+word.word)
            startGame()
        }

    });
}

// nuff said
startGame()
