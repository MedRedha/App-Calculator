import { Directive } from '@angular/core';

/**
 * Generated class for the CalculatorButtonDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[calculator-button]' // Attribute selector
})
export class CalculatorButtonDirective {

  constructor() {
    console.log('Hello CalculatorButtonDirective Directive');
  }

}
