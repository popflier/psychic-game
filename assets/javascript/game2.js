//GLOBAL SPACE

//variable to hold the win count
var win = 0;
//variable to hold the loss count
var loss = 0;
//variable to hold the guess count
var guessCount = 10;
//empty variable to hold the guesses the user has made
var guesses = [];
//variable to hold the possible letters the computer can pick from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var computerGuess;

resetGame();

//FUNCTIONS
function resetGame () {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    document.querySelector("#wins").innerHTML = win;
    document.querySelector("#losses").innerHTML = loss;
    guessCount = 10;
    guesses = [];
    updateGuessesOnPage ();
}
//++win is used with innerHTML (writing to page) if not used like this and used in a 
// function then you can just use win++
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + ++win;
}

//function that updates the losses on the page
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + ++loss;
}

function updateGuessesOnPage (){
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessCount;
    document.querySelector("#guesses").innerHTML = "Guess So Far: " + guesses.join(" , ");
};


//NON-GLOBAL SPACE
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    //variable to hold the random letter the computer has chosen
    
    
    console.log(userGuess);
    // if the guessed letter doesn't already exist in the guess array AND if it
    //is a letter that was guessed
    if (guesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        
        //if this doesn't work use a push
        // guessCount -;
        if (userGuess === computerGuess){
            updateWins();
            resetGame();
            console.log ("guesses");

        } else {
            guessCount --;
            guesses[guesses.length] = userGuess;
            updateGuessesOnPage();
            console.log("guesses didn't match");
            if (guessCount === 0) {
                console.log("user out of guesses");
                updateLosses();
                resetGame();
            }
        } 
    }

};
    
   // if (guessCount >= 1 && guessCount <= 10) {
       // getRandomLetter ();    
   // }

    // else {
    //     gameStatus();
        //alert("Do you want to play again?");
    // }
    
    
    
    // if (userGuess != computerGuess && guessCount === 0){
    //     updateLosses();
    // }
       
        
  




// function gameStatus() {
//     document.querySelector("#gameOver").innerHTML = "Game Over!";
// }



//anytime need to store information to use create a variable for that

//var win = 0;
//var lose = 0;
//var guessCount = 10;
//var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
//var guessedLetters = [];
//document.onkeypress = function(event) {
//    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
//    
//    var userGuess = event.key;
//    
//    if (userGuess === computerGuess) {
//        document.querySelector("#wins").innerHTML = wins++;
//    }
//    else {
//        guessCount --;
//    }
//    if (userGuess !== computerGuess && guessCount === 0) {
//        doument.querySelector("#losses").innerHTML = lose++;
//    }
//    
//    console.log(userGuess);
//};

































