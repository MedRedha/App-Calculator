import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalculatorScientificPage } from './calculator-scientific.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorScientificPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalculatorScientificPage]
})
export class CalculatorScientificPageModule {}
