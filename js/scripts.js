

function PuzzleSelector() {
  this.answer = "";
  this.dashes = [];
  this.ourSplitWord = [];
  this.guessedLettersRight = [];
  this.guessedLettersWrong = [];
  this.numberWrongGuessed = 0;
};

PuzzleSelector.prototype.gameWord = function(){
  var wordBank = ["cat", "dog", "parrot", "goldfish", "gecko", "turtle", "hamster", "rabbit", "horse", "frog", "ferret", "chinchilla", "hedgehog", "snake", "mouse"];
  var random = wordBank[Math.floor(wordBank.length * Math.random())];
  this.answer = random;
};

PuzzleSelector.prototype.breakUpWord = function(){
   // var word = new puzzleSelector("boat", "----");
  var ourWord = this.answer;
  var ourSplitWord = ourWord.split("");
  this.ourSplitWord = ourSplitWord;
};

PuzzleSelector.prototype.createPuzzle = function(){
  var wordLength = this.ourSplitWord.length;
  for (var index = 0; index < wordLength; index++) {
    this.dashes.push("-");
  };
};
PuzzleSelector.prototype.userGuess = function(userGuess){
  var wordLength = this.ourSplitWord.length;
  if (this.ourSplitWord.includes(userGuess)){
    for (var i = 0; i <= wordLength; i++){
      if(this.ourSplitWord[i] === userGuess){
        this.dashes[i] = userGuess;
        console.log(this.dashes);
        this.guessedLettersRight.push(userGuess);
      }
    }
  } else if(this.numberWrongGuessed === 0){
    this.guessedLettersWrong.push(userGuess);
    this.numberWrongGuessed +=1;
    $("#hangman-img").append("<img class='img-one' src='img/gallow.png'>");

  } else if(this.numberWrongGuessed === 1){
    this.numberWrongGuessed +=1;
    $("#hangman-img").empty("<img class='img-one' src='img/gallow.png'>");
    $("#hangman-img").append("<img class='img-two' src='img/head.png'>");

  } else if(this.numberWrongGuessed === 2){
    this.numberWrongGuessed +=1;
    $("#hangman-img").empty("<img class='img-two' src='img/head.png'>");
    $("#hangman-img").append("<img class='img-three' src='img/torso.png'>");

  } else if(this.numberWrongGuessed === 3){
    this.numberWrongGuessed +=1;
    $("#hangman-img").empty("<img class='img-three' src='img/torso.png'>");
    $("#hangman-img").append("<img class='img-four' src='img/left-arm.png'>");

  } else if(this.numberWrongGuessed === 4){
    this.numberWrongGuessed +=1;
    $("#hangman-img").empty("<img class='img-four' src='img/left-arm.png'>");
    $("#hangman-img").append("<img class='img-five' src='img/right-arm.png'>");

  } else if(this.numberWrongGuessed === 5){
    this.numberWrongGuessed +=1;
    $("#hangman-img").empty("<img class='img-five' src='img/right-arm.png'>");
    $("#hangman-img").append("<img class='img-six' src='img/left-leg.png'>");

  } else if(this.numberWrongGuessed === 6){
    this.numberWrongGuessed +=1;
    $("#hangman-img").empty("<img class='img-six' src='img/left-leg.png'>");
    $("#hangman-img").append("<img class='img-seven' src='img/right-leg.png'>");
  }
};

$(document).ready(function() {
  $("#play").click(function(event){
    $("#puzzle-blanks").empty();
    var puzzle = new PuzzleSelector;
    puzzle.gameWord();
    puzzle.breakUpWord();
    puzzle.createPuzzle();
    $("#blanks").show();
    $("#puzzle-blanks").append(puzzle.dashes);
    $("#blanks form").submit(function(event) {
      event.preventDefault();
      var userInput = $("select#userInput").val();
      puzzle.userGuess(userInput);
      $("#puzzle-blanks").empty();
      if (puzzle.numberWrongGuessed >= 7) {
      $("#puzzle-blanks").append("YOU'RE A LOSER.");
      } else {
        $("#puzzle-blanks").append(puzzle.dashes);
      };
    });
    });
  });



// PuzzleSelector.prototype.guess = function(userGuess)
//   if
//
// function User() {
//
// };

// User.prototype.gameWord = function(){
//   var answerArray= {"c", "a", "t"}
// };
//

// quess method; (userGuess)
//   if this.answerArray.includes(guess);
//
//   puzzle.forEach(function(letter){
//     if(letter === userGuess)
//
//   })
//
//   return dashes;
// }
