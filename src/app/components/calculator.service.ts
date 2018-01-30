import {Injectable} from '@angular/core';
import {opEnum, operator, specialOpEnum} from 'app/components/calculator/model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject'
@Injectable()
export class CalculatorService {

  private currentNumber: BehaviorSubject <string> = new BehaviorSubject('_');
  private displayString: BehaviorSubject <string> = new BehaviorSubject('');
  private message: Subject <string> = new Subject();

  private isCalculated = false;

  set setNumber(number: string) {
    if (this.isCalculated) {
      this.message.next('please select operator first!');
      return;
    } else {
      this.currentNumber.next(this.currentNumber.getValue() === '_'
          ? number.toString()
          : `${this.currentNumber.getValue()}${number}`);
    }

  }

  get getMessage() {
    return this.message;
  }

  get getCurrentNumber() {
    return this.currentNumber;
  }

  get getDisplayString() {
    return this.displayString;
  }

  public specialOperatorClicked(sOp: specialOpEnum) {
    this.message.next('');
    switch (Number(sOp)) {
      case specialOpEnum.clearAll:
        this.clearAll();
        break;
      case specialOpEnum.backSpace:
        this.backSpace();
        break;
      case specialOpEnum.delete:
        this.delete();
        break;

      default:
        break;
    }
  }

  public operatorClicked(op: opEnum) {
    this.message.next('');
    let shouldAddToDisplay = true;

    switch (Number(op)) {
      case opEnum.equal:
        if (this.isCalculated) {
          return;
        }
        this.equal();
        shouldAddToDisplay = false;
        break;

      case opEnum.minus:
        this.minus();
        break;

      case opEnum.point:
        this.point();
        shouldAddToDisplay = false;
        break;

      default:
        break;
    }

    if (shouldAddToDisplay) {
      if (this.isCalculated) {
        this.displayString.next(`${this.displayString.getValue()} ${operator[op]}`);
      } else {
        if (this.currentNumber.getValue() === '_') {
          this.displayString.next(`${this.displayString.getValue().slice(0, -2)} ${operator[op]}`);
        } else {
          this.displayString.next(`${this.displayString.getValue()} ${this.currentNumber.getValue()} ${operator[op]}`);
        }

      }
      this.currentNumber.next('_');
      this.isCalculated = false;
    }

  }

  private minus(): any {

    switch (this.currentNumber.getValue()) {
      case '0':
        this
          .currentNumber
          .next('-');
        break;

      case '-':
        this
          .currentNumber
          .next('_');
        break;

      default:
        break;
    }

  }

  private point(): any {
    const cn = this
      .currentNumber
      .getValue();
    this
      .currentNumber
      .next(cn.indexOf('.') > -1
        ? cn
        : `${cn}.`);
  }

  private equal(): any {
    let ds = this
      .displayString
      .getValue();
    ds = (`${ds} ${this.currentNumber.getValue()}`);
    this
      .currentNumber
      .next(eval(ds.substring(ds.lastIndexOf('=') + 1)));
    this
      .displayString
      .next(`${ds} = ${this.currentNumber.getValue()}`);
    this.isCalculated = true;
  }

  private delete(): any {
    this
      .currentNumber
      .next('_');
  }

  private backSpace(): any {
    const cn = this
      .currentNumber
      .getValue();
    this
      .currentNumber
      .next(cn.length === 1
        ? '_'
        : cn.substr(0, cn.length - 1));
  }

  private clearAll(): any {
    this
      .currentNumber
      .next('_');
    this
      .displayString
      .next('');
    this.isCalculated = false;
  }

}
