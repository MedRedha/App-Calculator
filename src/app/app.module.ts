import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MainApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalculatorProvider } from '../providers/calculator/calculator';

@NgModule({
  declarations: [
    MainApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MainApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MainApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalculatorProvider
  ]
})
export class AppModule {}
