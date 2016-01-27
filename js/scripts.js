function PuzzleSelector(answer, dashes) {
  this.answer = answer;
  this.dashes = dashes;
}

PuzzleSelector.prototype.breakUpWord = function(){
 // var word = new puzzleSelector("boat", "----");
var ourWord = this.answer;
var ourSplitWord = ourWord.split("");
return ourSplitWord;
};

PuzzleSelector.prototype.countLength = function(){
 // var word = new puzzleSelector("boat", "----");
var ourWord = this.answer;
var ourSplitWord = ourWord.split("");
var wordLength = ourSplitWord.length;
return wordLength;
};
