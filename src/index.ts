import { InputType, Numbers, ResultType } from "@types";
import Calculator from "@calculator";

class StringCalculator extends Calculator {
  private defaultDelimiter: string;
  constructor() {
    super();
    this.defaultDelimiter = ",";
    this.add = this.add.bind(this);
    this.extractNumbersFromInput = this.extractNumbersFromInput.bind(this);
    this.parseInputString = this.parseInputString.bind(this);
  }

  add(inputString: InputType = ""): ResultType {
    const numbers = this.extractNumbersFromInput(inputString.trim());
    this.numbers = numbers;
    this.allowOnlyPositiveNumbers = true;
    return super.add();
  }

  extractNumbersFromInput(inputString: InputType = ""): Numbers {
    if (!inputString) {
      return [];
    }

    if (inputString.length === 1 && !isNaN(Number(inputString))) {
      return [Number(inputString)];
    }

    const parsedInputString: InputType = this.parseInputString(inputString);

    const numbers: Numbers = parsedInputString
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

  parseInputString(inputString: InputType): InputType {
    const hasCustomDelimiterSpec =
      inputString.startsWith("//") && inputString.includes("\n");

    let delimiters: string = "";

    if (hasCustomDelimiterSpec) {
      const delimiterEndIndex: number = inputString.indexOf("\n");
      const customDelimiter: string = inputString.slice(0, delimiterEndIndex);
      inputString = inputString.slice(delimiterEndIndex + 1).trim();
      delimiters += customDelimiter;
    }

    if (inputString.includes("\n")) {
      delimiters += "\n";
    }

    const parsedString: string = inputString
      .split("")
      .reduce((parsedStr: string, char: string): string => {
        if (delimiters.includes(char)) {
          parsedStr += this.defaultDelimiter;
        } else {
          parsedStr += char;
        }
        return parsedStr;
      }, "");
    return parsedString;
  }
}

export default StringCalculator;
