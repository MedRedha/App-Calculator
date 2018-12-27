import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator-basic',
    pathMatch: 'full'
  },
  { path: 'calculator-basic', loadChildren: './pages/calculator-basic/calculator.module#Calculator1PageModule' },
  { path: 'calculator-postfix', loadChildren: './pages/calculator-postfix/calculator.module#Calculator6PageModule' },
  { path: 'calculator-scientific', loadChildren: './pages/calculator-scientific/calculator-scientific.module#CalculatorScientificPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
