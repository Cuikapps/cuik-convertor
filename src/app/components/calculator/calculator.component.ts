import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor(private calculator: CalculatorService) {}

  previous: string = '';
  current: string = '0';

  ngOnInit(): void {}

  addNumber(number: string) {
    if (this.current.indexOf('0') === 0) {
      this.current = number;
    } else if (this.current.includes('-') && this.current.indexOf('0') === 1) {
      this.current = '-' + number;
    } else {
      this.current += number;
    }
  }
  addDecimal() {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }
  changeSign() {
    if (this.current.includes('-')) {
      this.current = this.current.replace('-', '');
    } else {
      this.current = '-' + this.current;
    }
  }

  add() {
    this.previous += this.current + ' + ';
    this.current = '0';
  }
  subtract() {
    this.previous += this.current + ' - ';
    this.current = '0';
  }
  multiply() {
    this.previous += this.current + ' x ';
    this.current = '0';
  }
  divide() {
    this.previous += this.current + ' ÷ ';
    this.current = '0';
  }
  square() {
    this.current = (parseFloat(this.current) ** 2).toString();
  }
  squareRoot() {
    this.current = Math.sqrt(parseFloat(this.current)).toString();
  }
  fraction() {
    this.current = `${1 / parseFloat(this.current)}`;
  }
  toPercent() {
    this.current = (parseFloat(this.current) / 100).toString();
  }

  clear() {
    this.previous = '';
    this.current = '0';
  }
  clearEntry() {
    this.current = '0';
  }
  delete() {
    if (this.current.length === 1) {
      this.current = '0';
      return;
    }
    this.current = this.current.slice(0, -1);
  }

  enter() {
    this.current = this.calculator.calculate(this.previous, this.current);
  }
}
