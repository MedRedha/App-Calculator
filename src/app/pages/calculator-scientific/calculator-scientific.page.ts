import { Component, OnInit } from '@angular/core';

import * as math from 'mathjs'

@Component({
  selector: 'app-calculator-scientific',
  templateUrl: './calculator-scientific.page.html',
  styleUrls: ['./calculator-scientific.page.scss'],
})
export class CalculatorScientificPage implements OnInit {

    outputQueue = '';
    operatorStack = [];
    operators = {
        '^': {
            precedence: 4,
            associativity: 'Right'
        },
        '/': {
            precedence: 3,
            associativity: 'Left'
        },
        '*': {
            precedence: 3,
            associativity: 'Left'
        },
        '+': {
            precedence: 2,
            associativity: 'Left'
        },
        '-': {
            precedence: 2,
            associativity: 'Left'
        }
    };

    expression: any= ""
    result: any;

    constructor() { }

    ngOnInit() {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Calculator6Page');
    }

    isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    clean(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] === '') {
                data.splice(i, 1);
            }
        }
        return data;
    }

    infixToPostfix(infix) {
        console.log('::infixToPostfix | ', infix);

        infix = infix.replace(/\s+/g, '');
        infix = infix.split(/([\+\-\*\/\^\(\)])/);
        infix = this.clean(infix);

        for (var i = 0; i < infix.length; i++) {
            var token = infix[i];
            if (this.isNumeric(token)) {
                this.outputQueue += token + ' ';
            } else if ('^*/+-'.indexOf(token) !== -1) {
                var o1 = token;
                var o2 = this.operatorStack[this.operatorStack.length - 1];
                while (
                    '^*/+-'.indexOf(o2) !== -1 &&
                    ((this.operators[o1].associativity === 'Left' &&
                        this.operators[o1].precedence <= this.operators[o2].precedence) ||
                        (this.operators[o1].associativity === 'Right' &&
                            this.operators[o1].precedence < this.operators[o2].precedence))
                ) {
                    this.outputQueue += this.operatorStack.pop() + ' ';
                    o2 = this.operatorStack[this.operatorStack.length - 1];
                }
                this.operatorStack.push(o1);
            } else if (token === '(') {
                this.operatorStack.push(token);
            } else if (token === ')') {
                while (this.operatorStack[this.operatorStack.length - 1] !== '(') {
                    this.outputQueue += this.operatorStack.pop() + ' ';
                }
                this.operatorStack.pop();
            }
        }
        while (this.operatorStack.length > 0) {
            this.outputQueue += this.operatorStack.pop() + ' ';
        }

        console.log('::infixToPostfix | outputQueue = ', this.outputQueue);

        return this.outputQueue;
    }

	convertToFloat(value): number {
		return parseFloat(value);
	}

    solvePostfix(postfix) {
        console.log('::solvePostfix | ', postfix);

        var resultStack = [];
        postfix = postfix.split(' ');
        for (var i = 0; i < postfix.length; i++) {
            if (this.isNumeric(postfix[i])) {
                resultStack.push(postfix[i]);
            } else {
                var a = resultStack.pop();
				var b = resultStack.pop();

                if (postfix[i] === '+') {
                    resultStack.push(this.convertToFloat(a) + this.convertToFloat(b));
                } else if (postfix[i] === '-') {
                    resultStack.push(this.convertToFloat(b) - this.convertToFloat(a));
                } else if (postfix[i] === '*') {
                    resultStack.push(this.convertToFloat(a) * this.convertToFloat(b));
                } else if (postfix[i] === '/') {
                    resultStack.push(this.convertToFloat(b) / this.convertToFloat(a));
                } else if (postfix[i] === '^') {
                    resultStack.push(Math.pow(this.convertToFloat(b), this.convertToFloat(a)));
				}
            }
        }

        var result = '';

        if (resultStack.length > 1) {
            result = 'error';
        } else {
            result = resultStack.pop();
        }

        console.log('::solvePostfix | ', result);

        return result;
    }

    clear() {
        this.expression = '';
        this.outputQueue = '';
        this.operatorStack = [];

        console.log('::clear | ', this.expression);
    }

    calculate() {
        console.log('::calculate | expresion = ', this.expression);

        var postfix = this.infixToPostfix(this.expression);
        console.log('::calculate | postfix = ', postfix);

        this.expression = this.solvePostfix(postfix.trim());

        console.log('::calculate | expression = ', this.expression);

        this.outputQueue = '';
        this.operatorStack = [];
    }

	evaluate() {
		this.expression = math.format(math.eval(this.expression), {precision: 14});
	}

	add(value) {
		console.log('::add | ', value);

		if (value == 'PI') {
			value = Math.PI;
		}

        if (this.expression === '' || this.expression === undefined) {
            this.expression = value;
        } else {
            this.expression = this.expression + value;
        }

        console.log('::add | ', this.expression);
	}
}

