import { CalculatorService } from './../calculator.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorComponent } from './operator.component';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  // stub service and set method output
  const CalculatorServiceStub = {
    operatorClicked: jasmine.createSpy('operatorClicked'),
    specialOperatorClicked: jasmine.createSpy('specialOperatorClicked')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorComponent ],
      providers: [{provide: CalculatorService, useValue: CalculatorServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
