const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
  test('makes chains', function () {
    let mm = new MarkovMachine("aa bb cc aa BB aa BB");

    expect(mm.chains).toEqual(new Map([
      ["aa", ["bb", "BB", "BB"]],
      ["bb", ["cc"]],
      ["cc", ["aa"]],
      ["BB", ["aa", null]]]));
  });

});
