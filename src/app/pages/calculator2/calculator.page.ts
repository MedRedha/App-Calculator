import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class Calculator2Page implements OnInit {

  result = "";

  constructor() {
    console.log('Calculator2Page::constructor');
  }

  btnClicked(btn) {
    console.log('Calculator2Page::btnClicked = ' + btn);

    if (btn == 'C') {
      this.result = '';
    } else if (btn == '=') {
      this.result = eval(this.result);
    } else if (btn == 'AC') {
      this.result = '';
    } else {
      this.result += btn;
    }
  }
  ngOnInit() {
  }

}
