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

  test("should return the sum of two numbers", () => {
    const calculator: Calculator = new Calculator([1, 2]);
    expect(calculator.add()).toBe(3);
  });

  test("should return the sum of any amount of numbers", () => {
    const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
    const expectedSum = numbers.reduce((sum, num) => sum + num, 0);
    const calculator: Calculator = new Calculator(numbers);
    expect(calculator.add()).toBe(expectedSum);
  });
});
