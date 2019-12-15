var wins = document.getElementById("#wins")
var wins = 0

var losses = document.getElementById("#losses")
var losses = 0


var guess = 15

var allWords = ["Banana","Orange","Guava","Strawberry"]

var chosenWord = document.getElementById("#chosenWord")

var oldGuess = document.getElementById("#oldGuess")
var oldGuess = []

var start = document.getElementById("#start")


$(document).ready(function() {

    $(start).on("click", function() {
        chosenWord = Math.random(allWords.length)
        console.log(chosenWord)
        targetDiv.textContent = chosenWord;
        $("#start").text(chosenWord)
    });

})

var guess = document.getElementById("#guess")