import StringCalculator from "@stringCalculator";

describe("StringCalculator", () => {
  let add: StringCalculator["add"];

  beforeEach(() => {
    const stringCalculator = new StringCalculator();
    add = stringCalculator.add;
  });

  describe("Adding numbers from a string", () => {
    test("should return 0 for empty string", () => {
      expect(add("")).toBe(0);
    });

    test("should return the same number for a string containing only one number", () => {
      expect(add("1")).toBe(1);
    });
  });
});
