
    var targetWords = ["Trout", "Bluefish", "Croaker", "Flounder", "Cobia"];
   
    document.onkeyup = function(event) {
         
      var userGuess = event.key;
      var randomWord = targetWords[Math.floor(Math.random() * targetWords.length)];

     alert("User guess: " + userGuess);
     alert(randomWord);
    }