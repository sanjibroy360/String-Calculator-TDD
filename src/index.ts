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

    const numbers: Numbers = inputString
      .split(",")
      .reduce((numbersArray: Numbers, currentNumber: string): Numbers => {
        const numericValue: number = Number(currentNumber);

        if (!isNaN(numericValue)) {
          numbersArray.push(numericValue);
        }
        return numbersArray;
      }, []);

    return numbers;
  }
}

export default StringCalculator;
