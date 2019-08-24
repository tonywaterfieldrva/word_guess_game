
// DECLARING GLOBAL VARIBLES, OBJECTS AND ARRAYS 
var targetWords = [];
   var randomWord = "";
   var unUsedAlpha = [];
   var usedAlpha = [];
   var targetLetter = [];
   var incorrectGuesses = 0;
   var incorrectLimit = 8;
   var wins = 0;
   var losses = 0;
   var usedLettersMsg = "";
   var numMatchLetters = 0;
   var guessedWord = [];   
   var matchedLetter = false;
    var validLetter = false;
    var prevUsed = false;
    var gameOver = false;
    var FishImagesObject = {};    
    buildFishImagesObject();
    buildFishHintsObject();
   // hintButtonHidden();
   var initialLoadSound = true;


    // FUNCTION CLEAR MESSAGES FOR RESET
   function clearMessages() {
     hint.textContent = "";
     hold.textContent = "";
     wrongGuess.textContent = "";
     usedLetters.textContent = "";
     usedLettersLabel.textContent = "";
     changeImageNull("");
    
   }
    
  
   // FUNCTION TO RESET randomWord 
   function resetWord() {
    if (initialLoadSound) {
       playAudio();
       initialLoadSound = false;
    }
    gameOver = false;
//    hintButtonHidden();
    clearMessages();
    targetWords = [];
    guessedWord = [];
    targetWords = ["TUNA", "MARLIN", "TILEFISH", "GROUPER", "BLACK SEABASS", "WAHOO", "TARPON", "MAHI MAHI", "SPECKLED TROUT", "BLUEFISH", "CROAKER", "FLOUNDER", "COBIA", "WHITE PERCH", "TAUTOG", "SPOT", "MACKREL", "STRIPED BASS", "SPADEFISH"];
    //targetWords = ["BLACK SEABASS", "MAHI MAHI", "WHITE PERCH"];
    randomWord = "";
    unUsedAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    usedAlpha = [];
    randomWord = targetWords[Math.floor(Math.random() * targetWords.length)];
    hold.textContent = "";
    guessedWord = [];
    targetLetter = [];
    matchedLetter = false;
    validLetter = false;
    prevUsed = false;
    numMatchLetters = 0;
    incorrectGuesses = 0;
    statusMsg.textContent = "";
    console.log(randomWord);
    console.log("--------------");
    
   // BUILDING targetLetter ARRAY OF THE randomWord SELECTED WORD
   for (var i = 0; i < randomWord.length; i++) {
        var singleLetter = randomWord.substr(i,1);
        if (singleLetter === " ") {
          guessedWord.push("\u00A0");
          numMatchLetters++;
        }
        else {
          guessedWord.push("_");
        }
        targetLetter.push(singleLetter);
        hold.textContent = hold.textContent + " " + guessedWord[i];
        wrongGuess.textContent = "";
    }
   }

         // BUILDING OBJECT OF IMAGES IN FUNCTION BUT MAKING THE DECLARATION GLOBAL
   function buildFishImagesObject()  {
    FishImagesObject = {
      "TUNA" : "TUNA_pic.jpg",
      "MARLIN" : "MARLIN_pic.jpg",
      "TILEFISH" : "TILEFISH_pic.jpg",
      "GROUPER" : "GROUPER_pic.jpg",
      "BLACK SEABASS" : "SEABASS_pic.jpg",
      "WAHOO" : "WAHOO_pic.jpg",
      "TARPON" : "TARPON_pic.jpg",
      "MAHI MAHI" : "MAHI_pic.jpg",
      "SPECKLED TROUT" : "TROUT_pic.jpg",
      "BLUEFISH" : "BLUEFISH_pic.jpg",
      "CROAKER" : "CROAKER_pic.jpg", 
      "FLOUNDER" : "FLOUNDER_pic.jpg",
      "COBIA" : "COBIA_pic.jpg",
      "WHITE PERCH" : "PERCH_pic.jpg",
      "TAUTOG" : "TAUTOG_pic.jpg", 
      "SPOT" : "SPOT_pic.jpg",
      "MACKREL" : "MACKREL_pic.jpg",
      "STRIPED BASS" : "STRIPER_pic.jpg",
      "SPADEFISH" : "SPADEFISH_pic.jpg"
      }
    };

    function buildFishHintsObject()  {
    FishHintsObject = {
      "TUNA" : "As seen on TV Show Wicked ....",
      "MARLIN" : "MARLIN_pic.jpg",
      "TILEFISH" : "TILEFISH_pic.jpg",
      "GROUPER" : "GROUPER_pic.jpg",
      "BLACK SEABASS" : "SEABASS_pic.jpg",
      "WAHOO" : "WAHOO_pic.jpg",
      "TARPON" : "TARPON_pic.jpg",
      "MAHI MAHI" : "aka: Dolphin, Dorado",
      "SPECKLED TROUT" : "aka: Weakfish",
      "BLUEFISH" : "aka: Chopper",
      "CROAKER" : "Makes a croaking sound", 
      "FLOUNDER" : "Flat with eyes on same side of head",
      "COBIA" : "aka: Crab Eater",
      "WHITE PERCH" : "aka: Stiffback",
      "TAUTOG" : "TAUTOG_pic.jpg", 
      "SPOT" : "Oval dark marking behind head",
      "MACKREL" : "MACKREL_pic.jpg",
      "STRIPED BASS" : "Stripes on the side.  aka: Rockfish",
      "SPADEFISH" : "SPADEFISH_pic.jpg"
      }
    };

 // KEYUP FUNCTION
   document.onkeyup = function(event) {
        if (gameOver === false) {
           var userGuess = event.key;
           var userGuessUpper = userGuess.toUpperCase();
           matchedLetter = false;
           validLetter = false;
           prevUsed = false;
           statusMsg.textContent = "";
                        
          // DETERMINE IF CHARACTER IS VALID AND IF BEEN USED PREVIOUSLY
          // IF UNUSED REMOVE FROM unUsedAlpha array to usedAlpha array 
          // sets boolean flags of validLetter and prevUsed
          for (var i = 0; i < usedAlpha.length; i++) {
               if (userGuessUpper === usedAlpha[i]) {
                   validLetter = true;
                   prevUsed = true;
               }
          }     
          if (prevUsed === false) {
                for (var i = 0; i < unUsedAlpha.length; i++) {
                     if (userGuessUpper === unUsedAlpha[i]) {
                          validLetter = true;
                          prevUsed = false;
                          usedAlpha.push(unUsedAlpha[i]);
                          unUsedAlpha.splice(i,1);
                      } 
                }
                usedLetters.textContent = "";
                for (var z = 0; z < usedAlpha.length; z++) {
                     usedLettersLabel.textContent = "Used Letters";
                     usedLetters.textContent = usedLetters.textContent  + " " + usedAlpha[z];
                 }
           }    
          // DETERMINE IS THE userGuessUppper LETTER IS CORRECT OR INCORRECT
          // ONLY EXECUTES IF validLetter IS IN unUsedAlpha OR usedAlpha ARRAYS
          // ONLY EXECUTES IF prevLetter IS FALSE   
          if (validLetter === true && prevUsed === false) {       
                for (var i = 0; i < randomWord.length; i++) {
                   if (userGuessUpper === targetLetter[i]) {
                      guessedWord[i] = targetLetter[i];
                      matchedLetter = true;
                      numMatchLetters++;
                      hold.textContent = "";
                         for (var z = 0; z < guessedWord.length; z++) {
                             hold.textContent = hold.textContent + " " + guessedWord[z];
                         }
                    } 
                }  
                if (matchedLetter === false) {
                      incorrectGuesses++;
                      wrongGuess.innerHTML = "Wrong Guesses: " + incorrectGuesses + " of " + incorrectLimit;
                         if (incorrectGuesses === incorrectLimit - 3) {
                          //  hintButtonVisible();
                         }
                         
                          if (incorrectGuesses === incorrectLimit) {
                              playAudio_1();
                              statusMsg.textContent = "SORRY THE " + randomWord + " GOT AWAY....YOU ARE HAVING PROCESSED MEAT FOR DINNER";
                              losses++;
                              usedLetters.textContent = " ";
                              usedLettersLabel.textContent = " ";
                              changeImage("spam_img.jpg");
                              updateGameStatsMsg(wins, losses);
                              gameOver = true;
                          }
                 } 
                 else if (numMatchLetters === randomWord.length) {
                      statusMsg.textContent = "CONGRATS!!!! YOU ARE HAVING FRESH " + randomWord + " FOR DINNER";
                      usedLetters.textContent = " ";
                      usedLettersLabel.textContent = " ";
                      changeImage(FishImagesObject[randomWord]);
                      wins++;
                      updateGameStatsMsg(wins, losses)
                      gameOver = true;
                 }  
                }
                 // KICKOUT MESSAGE IF userGuessUpper HAS BEEN USED OR IS NOT IN usedAlpha or unUsedAlpha ARRAYS      
                 // NO COUNTERS ARE INCREMENTED -- NOT A VALID KEY OR ALREADY USED LETTER
                 if (validLetter === false) {
                     statusMsg.textContent = userGuessUpper + " is not a valid Alphabet character";
                 }     
                 else if (prevUsed === true) {
                     statusMsg.textContent = userGuessUpper + " has already been guessed";
                 }
            } 
        }
  
    
function updateGameStatsMsg(wins, losses) {
   var statmsg = document.getElementById("gameStatsMsg");
   statmsg.textContent = "WINS: " + wins + "   Loss: " + losses;
}

function changeImage(imgString) {
    var edit_save = document.getElementById("edit-save");
    edit_save.src  = "assets/images/" + imgString;
}

function changeImageNull() {
var edit_save = document.getElementById("edit-save");
    edit_save.src  = "";
}

function getHint() {
   var hintmsg = document.getElementById("hint");
        hintmsg.textContent = FishHintsObject[randomWord];
}

function hintButtonHidden() {
    var butHide = document.getElementById("getHint").style.visibility = "hidden";
    
}
function hintButtonVisible() {
  document.getElementById("getHint").style.visibility = "visible";
}


function playAudio() { 
  var x = document.getElementById("myAudio"); 
  x.play(); 
} 

function playAudio_1() {
  var x = document.getElementById("myAudio_1"); 
  x.play(); 
}

//function reeldrag() {
//  var x = document.getElementById("fishsplash");
//  x.play();
//}