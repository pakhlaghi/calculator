import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'app/components/calculator.service';

@Component({
  selector: 'c-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
public message: string;

  constructor(private cService: CalculatorService) { }

  ngOnInit() {
    this.cService.getMessage.subscribe(m => this.message = m);
  }

}
