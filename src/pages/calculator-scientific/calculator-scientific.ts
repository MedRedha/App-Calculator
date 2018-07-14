import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
	selector: "page-calculator-scientific",
	templateUrl: "calculator-scientific.html"
})
export class CalculatorScientificPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	result = "";

	ionViewDidLoad() {
		console.log("ionViewDidLoad CalculatorScientificPage");
	}

	btnClicked(btn) {
		console.log('Calculator1Page::set = ' + btn);
		if (btn == "C") {
			this.result = "";
		} else if (btn == "=") {
			this.result = eval(this.result);
		} else {
			this.result += btn;
		}
	}
}
