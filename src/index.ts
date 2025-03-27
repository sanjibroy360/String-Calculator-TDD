import Calculator from "./calculator";
import { InputType } from "./types";

class StringCalculator extends Calculator {
  constructor() {
    super();
  }

  add(inputString: InputType = ""): any {
    return inputString;
  }
}

export default StringCalculator;
