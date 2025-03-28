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

  test("should throw an exception for a single negative number when allowOnlyPositiveNumbers is true", () => {
    const calculator: Calculator = new Calculator([1, 2, 3, -4]);
    calculator["allowOnlyPositiveNumbers"] = true;
    expect(() => calculator.add()).toThrow("negative numbers not allowed -4");
  });

  test("should throw an exception for multiple negative numbers when allowOnlyPositiveNumbers is true", () => {
    const calculator: Calculator = new Calculator([1, -2, 3, -4, 5, -6]);
    calculator["allowOnlyPositiveNumbers"] = true;
    expect(() => calculator.add()).toThrow(
      "negative numbers not allowed -2,-4,-6"
    );
  });

  test("should not throw any exception for negative numbers when allowOnlyPositiveNumbers is false", () => {
    const calculator: Calculator = new Calculator([1, -2, 3, -4, 5, -6]);
    calculator["allowOnlyPositiveNumbers"] = false;
    expect(calculator.add()).toBe(-3)
  });

  test("should ignore numbers bigger than maxAllowedNumber", () => {
    const calculator: Calculator = new Calculator([1, 1001, 2]);
    calculator["maxAllowedNumber"] = 1000;
    expect(calculator.add()).toBe(3);
  });

  test("should not ignore any number when maxAllowedNumber is not set", () => {
    const calculator: Calculator = new Calculator([1, 1001, 2]);
    expect(calculator.add()).toBe(1004);
  });
});
