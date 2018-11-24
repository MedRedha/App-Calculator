import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Calculator5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-calculator5',
	templateUrl: 'calculator5.html'
})
export class Calculator5Page {
	public display = 0;
	public operator = 0;
	public operand = 0;

	message = 'hello';
	memory = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	numbers(x) {
		console.log('Calculator5Page::numbers | ', x)

		this.memory.push(x);
		this.display = this.memory.reduce( (a,b) => 10*a + b);
	}

	operation(x) {
		console.log('Calculator5Page::operation | ', x)

		this.operand = this.display;
		this.memory = [];
		this.operator = x;
	}

	clear() {
		console.log('Calculator5Page::clear | ')

		this.display = 0;
		this.operand = 0;
		this.memory = [];
	}
	equals() {
		console.log('Calculator5Page::equals | ')

		if (this.operator === 1) {
			this.display += this.operand;
		} else if (this.operator === 2) {
			this.display = this.operand - this.display;
		} else if (this.operator === 3) {
			this.display *= this.operand;
		} else if (this.operator === 4) {
			this.display = this.operand / this.display;
		}

		console.log('Calculator5Page::equals | display=', this.display)

	}

	squared(value) {
		return value * value;
	}
	squareRoot(value) {
		return Math.sqrt(value);
	}

	sine(value) {
		return Math.sin(value);
	}
	cosine(value) {
		return Math.cos(value);
	}
	arcsine(value) {
		return Math.asin(value);
	}
	arccosine(value) {
		return Math.acos(value);
	}
	tangent(value) {
		return Math.tan(value);
	}
	arctangent(value) {
		return Math.atan(value);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Calculator5Page');
	}
}
