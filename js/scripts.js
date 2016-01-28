var wordBank = ["cat", "dog", "parrot", "goldfish", "gecko", "turtle", "hamster", "rabbit", "horse", "frog", "ferret", "chinchilla", "hedgehog", "snake", "mouse"];

function PuzzleSelector() {
  this.answer = "";
  this.dashes = [];
  this.wordLength = 0;
  this.wordbank = "";
}

PuzzleSelector.prototype.breakUpWord = function(){
   // var word = new puzzleSelector("boat", "----");
  var ourWord = this.answer;
  var ourSplitWord = ourWord.split("");
  return ourSplitWord;
};

PuzzleSelector.prototype.createPuzzle = function(){
   // var word = new puzzleSelector("boat", "----");
  var ourWord = this.answer;
  var ourSplitWord = ourWord.split("");
  var wordLength = ourSplitWord.length;
  this.wordLength = wordLength;
  for (var index = 0; index < wordLength; index++) {
    this.dashes.push("-");
  }
    return this.dashes;
};
PuzzleSelector.prototype.gameWord = function(){
  var random = wordBank[Math.floor(wordBank.length * Math.random())];
  this.answer = random;
}




quess method; (userGuess)
  if this.answerArray.includes(guess);

  puzzle.forEach(function(letter){
    if(letter === userGuess)

  })

for(i=0; i >= this.wordLength; i++){
  if(puzzleArray[i] === userGuess){
    dashes[i] = userGuess
  }
  return dashes;
}
