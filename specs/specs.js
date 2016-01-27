// describe(Alphabet, function(){
//   it("for a word it will return the position of a specified letter as the index for a inputted string"), function(){
//     expect()
//   }

describe("PuzzleSelector", function() {
  it("assign the property of puzzle-answer, and puzzle-hidden to a word passed through the argument", function(){
    var word = new PuzzleSelector("boat", "----");
    expect(word.answer).to.equal("boat");
    expect(word.dashes).to.equal("----");
  });
  it("will arrange the chosen word string into a puzzle array", function() {
    var word = new PuzzleSelector("boat", "----");
    expect(word.breakUpWord()).to.eql["b", "o", "a", "t"];
  });
  it("will count the number of letters in the given answer", function() {
    var word = new PuzzleSelector("cellphone", "---------");
    expect(word.countLength()).to.equal(9);
  });
  it("will compare 'letters' array to 'puzzle' array")
  });
});
  // // it("will switch each piece of the array with a line")
  //

  // it("will compare a user letter to the 'letters' array")
  //
  // it("will uncover every 'puzzle' letter that a 'user' letter matches")

  // it("will display piece of hangman for ever letter that a 'user' letter does not match to the puzzle")
