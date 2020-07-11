# Hangman
Hangman style guessing game 

# Constructors
There are 2 constructor functions (one for words and letters) that assign functions and values to everything and is used to build words into puzzles

you can add more words if you like by only editing the word bank array

the word constructor builds a full set of letter constructors into an array, and two functions to compare a guess and print the whole array

the letters all have a character string, a false boolien value, a function to compare a guess and change boolien to true, and a function to print a "_" or a letter based on the boolien


# Logic
game logic is very simple, it rejects if any duplicates/multi-character/non-alphabetical inputs, 

then it calls the word objects guess function, and THAT calls every letter guess function individually, if it returns true/false score goes up/down

it calls and checks to see if every letter boolien is true, and runs victory conditions

the game repeates untill failure
