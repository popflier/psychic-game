var win = 0;
var losses = 0;
var userGuess = ;
var guessesNum = 10;
var guesses = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  
var storedLetter = "";    

getRandomLetter();

guesses.push();

function getRandomLetter() {
   storedLetter = letters[Math.floor(Math.random()*letters.length)]
};

document.onkeyup(){
    var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();

    if (userGuess === storedLetter){
        document.getElementById("#wins") wins++
        };
    
        
        
        
        
        
  };
//anytime need to store information to use create a variable for that