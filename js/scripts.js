

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
  } else {
    this.guessedLettersWrong.push(userGuess);
    this.numberWrongGuessed +=1;
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
console.log(puzzle.dashes);
      if (puzzle.numberWrongGuessed > 6) {
      $("#puzzle-blanks").append("YOURE A LOSER.");
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
