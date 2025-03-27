import { Numbers } from "@types";

class Calculator {
  protected numbers: Numbers = [];

  constructor(numbers: Numbers = []) {
    this.numbers = numbers;
  }

  add(): any {
    return;
  }
}

export default Calculator;
