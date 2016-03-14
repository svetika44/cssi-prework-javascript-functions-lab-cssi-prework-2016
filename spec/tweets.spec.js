'use strict';

describe("countChars", function() {
      it("given message = 'Watching Scandal'", function() {
        expect(countChars("Watching Scandal")).toEqual(16);
      });
});

describe("addHashtag", function() {
  it("given message = 'At the Gym'", function() {
        expect(addHashtag("At the Gym!")).toEqual("At the Gym! #yolo");
  });
});

describe("excitedTweet", function() {
  it("upcases a user's string and adds three exclamation points", function() {
        expect(excitedTweet("what a beautiful day")).toEqual("WHAT A BEAUTIFUL DAY!!!");
  });
});