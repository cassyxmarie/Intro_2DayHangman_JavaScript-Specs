// describe(Alphabet, function(){
//   it("for a word it will return the position of a specified letter as the index for a inputted string"), function(){
//     expect()
//   }

describe("PuzzleSelector", function() {
  // it("assign the property of puzzle-answer to a word passed through the argument", function(){
  //   var word = new PuzzleSelector();
  //   expect(word.answer).to.equal("boat");
  // });
  it("will arrange the chosen word string into a puzzle array", function() {
    var word = new PuzzleSelector();
    word.answer = "cat";
    expect(word.breakUpWord()).to.eql(["c", "a", "t"]);
  });
  it("will count the number of letters in the given answer and push '-''s to this.dashes for that number", function() {
    var word = new PuzzleSelector();
    word.answer = "cat";
    expect(word.createPuzzle()).to.eql(["-", "-", "-"]);
  });
  it("will choose a random word from the word bank", function() {
    var puzzle = new PuzzleSelector();
    puzzle.gameWord();
    expect(wordBank.includes(puzzle.answer)).to.eql(true);
  });
});
  // // it("will switch each piece of the array with a line")
  //

  // it("will compare a user letter to the 'letters' array")
  //
  // it("will uncover every 'puzzle' letter that a 'user' letter matches")

  // it("will display piece of hangman for ever letter that a 'user' letter does not match to the puzzle")
