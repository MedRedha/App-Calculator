import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalculatorPostfixPage } from './calculator.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorPostfixPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalculatorPostfixPage]
})
export class CalculatorPostfixPageModule {}
