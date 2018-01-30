import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberComponent } from './number.component';
import { CalculatorComponent } from './calculator.component';
import { DisplayComponent } from './display.component';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { OperatorComponent } from './operator.component';
import { CalculatorService } from 'app/components/calculator.service';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [NumberComponent, CalculatorComponent, DisplayComponent, OperatorComponent],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }

