import { Numbers, ResultType } from "@types";

class Calculator {
  protected numbers: Numbers = [];
  protected allowOnlyPositiveNumbers: boolean = false;

  constructor(
    numbers: Numbers = [],
    allowOnlyPositiveNumbers: boolean = false
  ) {
    this.numbers = numbers;
    this.allowOnlyPositiveNumbers = allowOnlyPositiveNumbers;
    this.add = this.add.bind(this);
    this.validateNumbers = this.validateNumbers.bind(this);
  }

  add(): ResultType {
    if (!this.numbers.length) {
      return 0;
    }

    if (this.allowOnlyPositiveNumbers) {
      this.validateNumbers();
    }

    if (this.numbers.length === 1) {
      return this.numbers[0];
    }

    const sum = this.numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }

  private validateNumbers(): void {
    const negativeNumbers: Numbers = this.numbers.filter(
      (num: number): boolean => Math.sign(num) === -1
    );

    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
  }
}

export default Calculator;
