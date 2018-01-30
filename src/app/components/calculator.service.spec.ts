import { opEnum } from './calculator/model';
import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('set number', inject([CalculatorService], (service: CalculatorService) => {
    service.setNumber = '5';
    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('5'));
  }));

  it('set number', inject([CalculatorService], (service: CalculatorService) => {
    service.setNumber = '5';

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('5'));
  }));

  it('add', inject([CalculatorService], (service: CalculatorService) => {
    service.setNumber = '5';
    service.operatorClicked(opEnum.add);

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('_'));
    service.getDisplayString.subscribe(d => expect(d).toBe(' 5 +'));
  }));

  it('minus', inject([CalculatorService], (service: CalculatorService) => {
    service.setNumber = '6';
    service.operatorClicked(opEnum.minus);

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('_'));
    service.getDisplayString.subscribe(d => expect(d).toBe(' 6 -'));
  }));

  it('multiply', inject([CalculatorService], (service: CalculatorService) => {
    service.setNumber = '7';
    service.operatorClicked(opEnum.multiply);

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('_'));
    service.getDisplayString.subscribe(d => expect(d).toBe(' 7 *'));
  }));

  it('multiply', inject([CalculatorService], (service: CalculatorService) => {
    service.setNumber = '8';
    service.operatorClicked(opEnum.divide);

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('_'));
    service.getDisplayString.subscribe(d => expect(d).toBe(' 8 /'));
  }));

  it('equal', inject([CalculatorService], (service: CalculatorService) => {

    service.setNumber = '8';
    service.operatorClicked(opEnum.add);
    service.setNumber = '9';
    service.operatorClicked(opEnum.equal);

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe(17));
    service.getDisplayString.subscribe(d => expect(d).toBe(' 8 + 9 = 17'));
  }));

  it('point', inject([CalculatorService], (service: CalculatorService) => {

    service.setNumber = '8';
    service.operatorClicked(opEnum.point);
    service.setNumber = '9';

    service.getCurrentNumber.subscribe(cn => expect(cn).toBe('8.9'));
  }));

  it('change operator', inject([CalculatorService], (service: CalculatorService) => {

    service.setNumber = '8';
    service.operatorClicked(opEnum.add);
    service.operatorClicked(opEnum.divide);

    service.getDisplayString.subscribe(d => expect(d).toBe(' 8 /'));
  }));

});
