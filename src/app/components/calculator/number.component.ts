import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  numbers = Array.from(Array(10).keys());

  constructor() { }

  ngOnInit() {
  }

  onNumberClick(number) {
    console.log(number);
  }

}
