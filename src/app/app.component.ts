import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Rechner 1', url: '/calculator1', icon: 'list' },
    { title: 'Rechner 2', url: '/calculator2', icon: 'list' },
    { title: 'Rechner 5', url: '/calculator5', icon: 'list' },
    { title: 'Rechner Postfix', url: '/calculator-postfix', icon: 'calc' },
    { title: 'Rechner Wissenschaftlich', url: '/calculator-scientific', icon: 'list' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
