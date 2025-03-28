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

    test("should return the sum of two comma-separated numbers", () => {
      expect(add("1,2")).toBe(3);
    });

    test("should return the sum of any amount of comma-separated numbers", () => {
      const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
      const expectedSum = numbers.reduce((sum, num) => sum + num, 0);
      const inputString = numbers.join(",");
      expect(add(inputString)).toBe(expectedSum);
    });

    test("should also handle new lines between numbers as delimiter", () => {
      expect(add("1\n2,3")).toBe(6);
    });

    test("should support custom delimiter", () => {
      expect(add("//;\n1;2")).toBe(3);
    });

    test("should throw an exception for a single negative number input", () => {
      expect(() => add("-9")).toThrow("negative numbers not allowed -9");
      expect(() => add("1,2,3,-4")).toThrow("negative numbers not allowed -4");
      expect(() => add("//;\n1;-2;3;4")).toThrow(
        "negative numbers not allowed -2"
      );
    });

    test("should throw an exception for multiple negative numbers input", () => {
      expect(() => add("1,-2,3,-4,5,-6")).toThrow(
        "negative numbers not allowed -2,-4,-6"
      );
      expect(() => add("//;\n1;-2;3;-4;5;6")).toThrow(
        "negative numbers not allowed -2,-4"
      );
    });
  });
});
