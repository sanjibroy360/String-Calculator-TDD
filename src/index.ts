import { InputType, Numbers, ResultType } from "@types";
import Calculator from "@calculator";

class StringCalculator extends Calculator {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.extractNumbersFromInput = this.extractNumbersFromInput.bind(this);
  }

  add(inputString: InputType = ""): ResultType {
    const numbers = this.extractNumbersFromInput(inputString.trim());
    this.numbers = numbers;
    return super.add();
  }

  extractNumbersFromInput(inputString: InputType = ""): Numbers {
    if (!inputString) {
      return [];
    }

    if (inputString.length === 1 && !isNaN(Number(inputString))) {
      return [Number(inputString)];
    }
    return [];
  }
}

export default StringCalculator;
