import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'app/components/calculator.service';

@Component({
  selector: 'c-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public displayNumber: string;
public calculatedNumber: string;

  constructor(private cService: CalculatorService) { }

  ngOnInit() {
  this.cService.getCurrentNumber.subscribe(dn => this.displayNumber = dn);
  this.cService.getDisplayString.subscribe(cn => this.calculatedNumber = cn);
  }

}
