// constructors
// =====================================================================================================
// gives every individual letter variables and fucnctions to collect data in order to display the users progress
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
        finalPrint = "|" + newPrint + "|"
        console.log(finalPrint)
        return finalPrint
    }

    // looks through every letter to see if the guess is correct
    // needs to return trueGuess instead of straight true value becouse if its in the if statement it wont reveal multi char correct awnsers
    this.guess = function (arg) {
        trueGuess = false
        for (i in this.array) {
            if (this.array[i].check(arg)) {
                trueGuess = true
            }
        }
        return trueGuess
    }

    // if every letter.boolien value is true retun true so hangman.js can run congrats victory code
    this.winCon = function () {
        winScore = 0
        for (i in this.array) {
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
var words = ["conundrum", "implication", "onamonapia", "breakfast", "bethoven", "lightning", "thunder"]
var guessArr = [];

var gamestart = false

const maxCount = 7

// player interactions
$(document).ready(function () {

    // (re)start button
    $("#start").on("click", function () {
        gameStart = true
        word = new ConvertToPuzzle(words[Math.floor(Math.random() * 3)])
        count = maxCount
        guessArr = []
        $("#attempts-left").html(count)
        $("#the-word").html(word.print())
        $("#attempts-failed").html(guessArr)
        $("#talk-box").html("Good Luck!")
    });

    // when key is pressed it is lowercased and parsed into gamecycle
    document.onkeyup = function (event) {
        if (gameStart) {
            askQuestion(event.key.toLowerCase())
        }
    };

})

// game cycle
// ===============================================================================
function askQuestion(guess) {

    // reasks question if guess is longer than 1 character or non alphabet or empty
    if (guess.length > 1 || !/^[a-z]*$/g.test(guess) || guess === " ") {
        $("#talk-box").html("There is something with your guess that is unacceptable")
        return false;
    }

    // checks to see if letter has been guessed b4 to prevent unneccesary counter losses
    for (var i = 0; i < guessArr.length; i++) {
        if (guess === guessArr[i]) {
            $("#talk-box").html("You have tried this guess before")
            return false;
        }
    }

    // use constructor to find true false on guess
    if (word.guess(guess)) {
        $("#talk-box").html(guess + " was correct")
        guessArr.push(guess)
    } else {
        $("#talk-box").html(guess + " was incorrect")
        guessArr.push(guess)
        count--;
    }

    // if all letter.bool values are true then it will return true and run victory
    if (word.winCon()) {
        gamestart = false
        $("#talk-box").html("You won!")
        $("#the-word").html("The word was " + word.word)
        return false;
    }

    $("#attempts-left").html(count)

    var printAttempts = []
    for (i = 0; i < guessArr.length; i++) {
        printAttempts.push(guessArr[i])
        if (guessArr.length !== i) {
            printAttempts.push(", ")
        }
    }

    // countdown
    if (count > 0) {
        $("#attempts-failed").html(printAttempts)
        $("#the-word").html(word.print())
    } else {
        $("#talk-box").html("Sorry, but you lost")
        $("#the-word").html("The word was " + word.word)
        gameStart = false
    }
}