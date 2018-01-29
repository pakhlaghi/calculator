import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberComponent } from './number.component';
import { CalculatorComponent } from './calculator.component';
import { DisplayComponent } from './display.component';

import { CalculatorRoutingModule } from './calculator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [NumberComponent, CalculatorComponent, DisplayComponent]
})
export class CalculatorModule { }

