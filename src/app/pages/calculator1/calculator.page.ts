import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class Calculator1Page implements OnInit {

  result = "";

  constructor() { }

  ngOnInit() {
  }

  btnClicked(btn) {
		console.log('Calculator1Page::btnClicked = ' + btn);
		if (btn == "C") {
			this.result = "";
		} else if (btn == "=") {
			this.result = eval(this.result);
		} else {
			this.result += btn;
		}
	}
}
