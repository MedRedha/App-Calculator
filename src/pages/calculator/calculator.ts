import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";

@IonicPage()
@Component({
	selector: "page-calculator",
	templateUrl: "calculator.html"
})
export class CalculatorPage {
	result = "";

	constructor(public navCtrl: NavController) {
		console.log('CalculatorPage::constructor');
	}

	btnClicked(btn) {
		if (btn == "C") {
			this.result = "";
		} else if (btn == "=") {
			this.result = eval(this.result);
		} else {
			this.result += btn;
		}
	}
}
