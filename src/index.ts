import { InputType } from "@types";
import Calculator from "@calculator";


class StringCalculator extends Calculator {
  constructor() {
    super();
  }

  add(inputString: InputType = ""): any {
    return inputString;
  }
}

export default StringCalculator;
