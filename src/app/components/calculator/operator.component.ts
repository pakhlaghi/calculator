import { specialOperator } from './model';
import { Component, OnInit } from '@angular/core';
import { opEnum, operator, specialOpEnum } from 'app/components/calculator/model';
import { CalculatorService } from 'app/components/calculator.service';

@Component({
  selector: 'c-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  objectKeys = Object.keys;
  public op = operator;
  public sOp = specialOperator;

  constructor(private cService: CalculatorService) { }

  ngOnInit() {
  }

  public onOpClick(op: opEnum) {
    this.cService.operatorClicked(op);
  }

  public onSOpClick(op: specialOpEnum) {
    this.cService.specialOperatorClicked(op);
  }

}
