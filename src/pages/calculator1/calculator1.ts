import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";

@IonicPage()
@Component({
	selector: "page-calculator1",
	templateUrl: "calculator1.html"
})
export class Calculator1Page {
	result = "";

	constructor(public navCtrl: NavController) {
		console.log('Calculator1Page::constructor');
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
