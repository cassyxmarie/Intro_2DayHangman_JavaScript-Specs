
describe("PuzzleSelector", function() {
  it("will choose a random word from the word bank", function() {
    var puzzle = new PuzzleSelector();
    puzzle.gameWord();
    expect(puzzle.answer).to.equal("dragon");
  });
  it("will arrange the chosen word string into a puzzle array", function() {
    var word = new PuzzleSelector();
    word.gameWord();
    word.breakUpWord();
    expect(word.ourSplitWord).to.eql(["d","r","a","g","o","n"]);
  });
  it("will count the number of letters in the given answer and push '-''s to this.dashes for that number", function() {
    var word = new PuzzleSelector();
    word.gameWord();
    word.breakUpWord();
    word.createPuzzle();
    expect(word.dashes).to.eql(["-", "-", "-", "-", "-", "-"]);
  });
  it("will use a loop to locate correct user guess letter to the ourSplitWord array and replace a dash at the appropriate position for dashes array, and push correct guessed letter to right guesses array", function() {
    var word = new PuzzleSelector();
    word.gameWord();
    word.breakUpWord();
    word.createPuzzle();
    word.userGuess("a");
    expect(word.dashes).to.eql(["-", "-", "a", "-", "-", "-"]);
    expect(word.guessedLettersRight).to.eql(["a"]);
  });
  it("will push wrong guessed letter to wrong guesses array, and add +1 for wrong guesses to this.numberworngguessed", function() {
    var word = new PuzzleSelector();
    word.gameWord();
    word.breakUpWord();
    word.createPuzzle();
    word.userGuess("b");
    expect(word.dashes).to.eql(["-", "-", "-", "-", "-", "-"]);
    expect(word.guessedLettersWrong).to.eql(["b"]);
    expect(word.numberWrongGuessed).to.equal(1);
  });
});
  // it("will keep track of every letter a user has guessed", function() {
  //   var word = new PuzzleSelector();
  //   word.gameWord();
  //   word.breakUpWord();
  //   word.createPuzzle();
  //   word.userGuess("a");
  // }
