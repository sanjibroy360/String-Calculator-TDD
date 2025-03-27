import Calculator from "@calculator";

describe("Calculator", () => {
  test("should return 0 if no numbers are present", () => {
    const calculator: Calculator = new Calculator();
    expect(calculator.add()).toBe(0);
  });

  test("should return the same number when given an array containing only one number", () => {
    const calculator: Calculator = new Calculator([1]);
    expect(calculator.add()).toBe(1);
  });
});
