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
    return 0;
  }
}

export default Calculator;
