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
//variable to hold the random letter the computer has chosen
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//NON-GLOBAL SPACE
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    console.log(userGuess);
    
    if (guesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guesses[guesses.length] = userGuess;
        guessCount --;
    }
    
   if (guessCount >= 1 || guessCount <= 10) {
       getRandomLetter ();    
   }

    else {
        gameStatus();
        //alert("Do you want to play again?");
    }
    
    if (userGuess === computerGuess){
        updateWins();
    }
    
    if (userGuess != computerGuess && guessCount === 0){
        updateLosses();
    }
       
        
  };


function updateWins() {
    document.querySelector("#wins").innerHTML = win++;
}

//function that updates the losses on the page
function updateLosses() {
    document.querySelector("#losses").innerHTML = loss++;
}

function gameStatus() {
    document.querySelector("#gameOver").innerHTML = "Game Over!";
}



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

































