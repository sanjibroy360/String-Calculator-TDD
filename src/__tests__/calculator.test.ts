import Calculator from "@calculator";

describe("Calculator", () => {
  test("should return 0 if no numbers are present", () => {
    const calculator: Calculator = new Calculator();
    expect(calculator.add()).toBe(0);
  });
});
