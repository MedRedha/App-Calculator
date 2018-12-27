import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator1',
    pathMatch: 'full'
  },
  { path: 'calculator1', loadChildren: './pages/calculator1/calculator.module#Calculator1PageModule' },
  { path: 'calculator2', loadChildren: './pages/calculator2/calculator.module#Calculator2PageModule' },
  { path: 'calculator5', loadChildren: './pages/calculator5/calculator.module#Calculator5PageModule' },
  { path: 'calculator-postfix', loadChildren: './pages/calculator-postfix/calculator.module#Calculator6PageModule' },
  { path: 'calculator-scientific', loadChildren: './pages/calculator-scientific/calculator-scientific.module#CalculatorScientificPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
