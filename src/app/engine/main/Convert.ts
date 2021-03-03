import Big from 'big.js';
import { CONVERSIONS } from '../data/Conversions';

export class Convert {
  public static convert(type: string, input: string): string {
    let parsedData: [string, string[][]] = ['', [['', '']]];
    for (let i = 0; i < CONVERSIONS.length; i++) {
      for (let c = 0; c < CONVERSIONS[i].length; c++) {
        //Returns data in this format [string]-[number][operation]?-[...]
        if (CONVERSIONS[i][c].split('_')[0] === type)
          parsedData = this.parseData(CONVERSIONS[i][c]);
      }
    }
    if (!parsedData[0] || !parsedData[1][0]) {
      Error('Failed parsing');
      return ' ';
    }

    return this.convertParsedData(parsedData, input);
  }

  private static parseData(data: string): [string, string[][]] {
    let selectedConversion = data.split('_');
    let numberOfNumbers = selectedConversion.length - 1;

    let checker: string = selectedConversion[0];

    let numbers: Array<Array<string>> = [];

    for (let number = 0; number < numberOfNumbers; number++) {
      numbers.push(selectedConversion[number + 1].split('$'));
    }

    let returnedParse: [string, string[][]] = [checker, numbers];
    return returnedParse;
  }

  private static doOperation(
    operator: string,
    operand1: string,
    operand2: string
  ): string {
    if (operator === 'add') return Big(operand1).add(operand2).toString();
    else if (operator === 'times')
      return Big(operand1).times(operand2).toString();
    else if (operator === 'minus')
      return Big(operand1).minus(operand2).toString();
    else if (operator === 'div') return Big(operand1).div(operand2).toString();
    else if (operator === 'hold') return operand2;
    else return Big(operand1).times(operand2).toString();
  }

  private static convertParsedData(
    parsedData: [string, string[][]] = ['', [['', '']]],
    input: string
  ) {
    const FIRST_OPERAND: string =
      parsedData[1][0][0] !== '('
        ? this.doOperation(parsedData[1][0][1], input, parsedData[1][0][0])
        : '0';

    //Holds numbers while calculations are looped through
    let holder: string = FIRST_OPERAND;

    //Holds number when operator is "hold"
    let ifHold: string[] = ['0'];

    //if there is only one calculation then we just return FIRST_OPERAND
    if (parsedData[1].length <= 1) return holder;

    //Loop through calculations
    for (let i = 1; i < parsedData[1].length; i++) {
      // if non of those conditions are met then we do a normal calculation
      holder = this.doOperation(
        parsedData[1][i][1],
        holder,
        parsedData[1][i][0]
      );
    }
    return holder;
  }
}
