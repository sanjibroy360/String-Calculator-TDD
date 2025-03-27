import { Numbers, ResultType } from "@types";

class Calculator {
  protected numbers: Numbers = [];

  constructor(numbers: Numbers = []) {
    this.numbers = numbers;
    this.add = this.add.bind(this);
  }

  add(): ResultType {
    if (!this.numbers.length) {
      return 0;
    }

    if (this.numbers.length === 1) {
      return this.numbers[0];
    }

    const sum = this.numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}

export default Calculator;
