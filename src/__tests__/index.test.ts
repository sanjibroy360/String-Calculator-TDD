import StringCalculator from "..";

describe("StringCalculator", () => {
  let add: StringCalculator["add"];

  beforeEach(() => {
    const stringCalculator = new StringCalculator();
    add = stringCalculator.add;
  });

  describe("Adding numbers from a string", () => {
    test("should return 0 for empty string", () => {
      expect(add("")).toEqual(0);
    });
  });
});
