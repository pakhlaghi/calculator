import {Injectable} from '@angular/core';

@Injectable()
export class CalculatorService {

  currentNumber = 0;
  calculated = 0;
  displayString = '';

  constructor() {}

  set setNumber(number) {
    this.currentNumber = number;
  }

  get getCalculatedNumber() {
    return this.calculated;
  }

  add(): any {
    console.log('+');
  }

  multiply(): any {console.log('*'); }
  divid(): any {console.log('divide'); }
  minus(): any {console.log('minus'); }

  operatorClicked(operator: opEnum) {

    switch (operator) {
      case opEnum.add:
        this.add();
        break;

      case opEnum.minus:
        this.minus();
        break;

      case opEnum.divid:
        this.divid();
        break;

      case opEnum.multiply:
        this.multiply();
        break;

      default:
        break;
    }
  }

}
