import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  numbers = Array.from(Array(10).keys());

  constructor(private cService: CalculatorService) { }

  ngOnInit() {
  }

  onNumberClick(number: string) {
    this.cService.setNumber = number;
  }

}
