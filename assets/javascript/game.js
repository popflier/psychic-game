//variable to hold the win count
var win = 0;
//variable to hold the loss count
var loss = 0;
//variable to hold the guess count
var guessCount = 10;
//variable to hold the users guess
var userGuess = ;
//empty variable to hold the guesses the user has made
var guesses = [];
//variable to hold the possible letters the computer can pick from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
//random letter that computer has chosen
var storedLetter = "";  


//this will run the function to have the computer generate a random letter
getRandomLetter();

//this will add the keys the user presses to the end of the guesses array
guesses.push();

function getRandomLetter() {
   storedLetter = letters[Math.floor(Math.random()*letters.length)]
};

//function that updates the wins on the page
function updateWins() {
    document.querySelector("#wins").innerHTML = win++;
};

//function that updates the losses on the page
function updateLosses() {
    document.querySelector("#losses").innerHTML = loss++;
};

function gameStatus() {
    document.querySelector("#gameOver").innerHTML = "Game Over!";
};


document.onkeypress(){
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    
    //if guessCount is equal to or greater than 1 or less than or equal to 10 then get random letter (to start game). 
    if (guessCount => 1 || guessCount <= 10) {
        getRandomLetter ();    
    }
    //anything else then the guessCount would be 0 since it's less than 10 but more than 1. If it is 0 then the game is over.
    else {
        gameStatus();
        //alert("Do you want to play again?");
    };
    
    if (userGuess === storedLetter){
        updateWins();
        getRandomLetter();
    };
    
    if (userGuess != storedLetter && guessCount === 0){
        updateLosses();
        getRandomLetter();
    };
    
    
        
        
        
        
        
  };
//anytime need to store information to use create a variable for that