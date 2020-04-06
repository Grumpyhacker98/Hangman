// constructors
// =====================================================================================================
// gives every letter variables and for loops to collect it all again and display the users progress
function newLetter(char) {

    this.char = char
    this.bool = false

    // if the letter is a space make .bool true as its not a letter to guess
    if (this.char === " ") {
        this.bool = true
    }

    // pushes letters to printArr so printArr can print the whole word partially revealed
    this.printLetter = function () {
        if (this.bool) {
            printArr.push(this.char)
        } else {
            printArr.push("_")
        }
    }

    this.check = function (arg) {
        if (this.char === arg) {
            this.bool = true
            // return true so that the convertToWord.guess can return true so that it can print an incorrect or correct statement
            return true
        }
    }
}
// for loops for print functions
// will turn into return variable to print unto screen properly
function ConvertToPuzzle(word) {

    // create letter constructor array
    this.word = word
    this.array = []
    wordArr = word.split("")
    for (var i = 0; i < wordArr.length; i++) {
        letter = new newLetter(wordArr[i])
        this.array.push(letter)
    }

    // create and print printArr of covered/uncovered letters with dividers
    this.print = function () {
        printArr = []
        for (var i = 0; i < this.array.length; i++) {
            this.array[i].printLetter()
        }
        newPrint = printArr.join("|")
        console.log("|" + newPrint + "|")
    }

    // looks through every letter to see if the guess is correct
    // needs to return trueGuess instead of straight true value becouse if its in the if statement it wont reveal multi char correct awnsers
    this.guess = function (arg) {
        trueGuess = false
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].check(arg)) {
                trueGuess = true
            }
        }
        return trueGuess
    }

    // if every letter.boolien value is true retun true so hangman.js can run congrats victory code
    this.winCon = function () {
        winScore = 0
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].bool) {
                winScore++
            }

        }
        if (winScore === this.array.length) {
            return true
        }
    }

}

// primary game frame
// ==============================================================

// word bank
var words = ["conundrum", "implication", "onamonapia"]
var guessArr = [];

var gamestart = false

const maxCount = 7


$(document).ready(function () {

    // (re)start button
    $("#start").on("click", function () {

        gameStart = true
        word = new ConvertToPuzzle(words[Math.floor(Math.random() * 3)])
        count = maxCount
        guessArr = []
        word.print()

    });

    // when key is pressed it is lowercased and parsed  into gamecycle
    document.onkeyup = function (event) {
        if(gameStart){
            askQuestion(event.key.toLowerCase())
        }
    };

})

// game cycle
// ===============================================================================
function askQuestion(guess) {

    // reasks question if guess is longer than 1 character or non alphabet or empty
    if (guess.length > 1 || !/^[a-z]*$/g.test(guess) || guess === " ") {
        console.log("unacceptable guess")
        return false;
    }

    // checks to see if letter has been guessed b4 to prevent unneccisary counter losses
    for (var i = 0; i < guessArr.length; i++) {
        if (guess === guessArr[i]) {
            console.log("You have guessed this choice before")
            return false;
        }
    }

    // use constructor to find true false on guess
    if (word.guess(guess)) {
        console.log("Correct")
    } else {
        console.log("Incorrect")
        guessArr.push(guess)
        count--;
    }

    // if all letter.bool values are true then it will return true and run victory
    if (word.winCon()) {
        console.log("=================================")
        console.log("Congratulations! You Won!")
        console.log("The word was: " + word.word)
        console.log("=================================")
        // startGame()
        return false;
    }

    // countdown
    if (count > 0) {
        console.log("Wrong tries: " + guessArr)
        word.print()    
        console.log("Attempts left: " + count)
    } else {
        console.log("Sorry, but you lost!")
        console.log("The word was: " + word.word)
        gameStart = false
    }
}