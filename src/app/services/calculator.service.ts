import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  public calculate(previous: string, current: string): string {
    let calculations: string[] = (previous + current).split(' ');

    let finalCalculation: string = calculations[0];

    let i = 1;
    while (i < calculations.length) {
      finalCalculation = this.applyOperator(
        finalCalculation,
        calculations[i + 1],
        calculations[i]
      );
      i += 2;
    }
    return finalCalculation;
  }

  private applyOperator(
    operand1: string,
    operand2: string,
    operator: string
  ): string {
    console.log(operand1 + operand2);
    switch (operator) {
      case '+':
        return new BigNumber(operand1).plus(operand2).toString();
      case '-':
        return new BigNumber(operand1).minus(operand2).toString();
      case 'x':
        return new BigNumber(operand1).times(operand2).toString();
      case '÷':
        return new BigNumber(operand1).div(operand2).toString();
      default:
        return '0';
    }
  }
}
