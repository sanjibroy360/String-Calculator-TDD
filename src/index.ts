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
    this.getDelimiters = this.getDelimiters.bind(this);
  }

  add(inputString: InputType = ""): ResultType {
    const numbers = this.extractNumbersFromInput(inputString.trim());
    this.numbers = numbers;
    this.allowOnlyPositiveNumbers = true;
    this.maxAllowedNumber = 1000;
    return super.add();
  }

  private extractNumbersFromInput(inputString: InputType = ""): Numbers {
    if (!inputString) {
      return [];
    }

    if (inputString.length === 1 && !isNaN(Number(inputString))) {
      return [Number(inputString)];
    }

    const parsedInputString: InputType = this.parseInputString(inputString);

    const numbers: Numbers = parsedInputString
      .split(this.defaultDelimiter)
      .reduce((numbersArray: Numbers, currentNumber: string): Numbers => {
        const numericValue: number = Number(currentNumber);

        if (!isNaN(numericValue)) {
          numbersArray.push(numericValue);
        }
        return numbersArray;
      }, []);

    return numbers;
  }

  private parseInputString(inputString: InputType): InputType {
    const hasCustomDelimiterSpec =
      inputString.startsWith("//") && inputString.includes("\n");

    if (!hasCustomDelimiterSpec && !inputString.includes("\n")) {
      return inputString.trim();
    }

    let delimiters: string[] = [];
    let parsedString: InputType = "";

    if (hasCustomDelimiterSpec) {
      const delimiterEndIndex: number = inputString.indexOf("\n");
      const customDelimiterString: string = inputString.slice(2, delimiterEndIndex);
      delimiters = this.getDelimiters(customDelimiterString);
      inputString = inputString.slice(delimiterEndIndex + 1).trim();
    }

    if (inputString.includes("\n")) {
      delimiters.push("\n");
    }

    if (delimiters.length > 0) {
      const delimiterPattern = delimiters.reduce(
        (pattern: string, d: string): string => pattern + `\\${d}`,
        ""
      );
      const regexPattern = new RegExp(`[${delimiterPattern}]+`);
      parsedString = inputString
        .split(regexPattern)
        .join(this.defaultDelimiter);
    }

    return parsedString;
  }

  private getDelimiters(delimiter: string): string[] {
    const hasisDelimiterBlock =
      delimiter.includes("[") && delimiter.includes("]");

    if (!hasisDelimiterBlock) {
      return [delimiter];
    }

    let delimiters: string[] = [];
    let currentDelimiter = "";
    let isInDelimiterBlock = false;
    let currentIndex = 0;

    delimiters = delimiter
      .split("")
      .reduce((delimiterList: string[], character: string) => {
        if (character === "[") {
          isInDelimiterBlock = true;
          return delimiterList;
        }

        if (character === "]") {
          isInDelimiterBlock = false;
          delimiterList.push(currentDelimiter);
          currentDelimiter = "";
          return delimiterList;
        }

        if (isInDelimiterBlock) {
          currentDelimiter += character;
        } else {
          delimiterList[currentIndex] = delimiterList[currentIndex]
            ? delimiterList[currentIndex] + character
            : character;
        }

        return delimiterList;
      }, []);

    return delimiters;
  }
}

export default StringCalculator;
