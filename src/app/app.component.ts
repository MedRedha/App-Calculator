import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
	templateUrl: "app.html"
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = "Calculator1Page";

	pages: Array<{ title: string; component: any }>;

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen
	) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: "Calculator 1", component: "Calculator1Page" },
			{ title: "Calculator 2", component: "Calculator2Page" },
			{ title: "Calculator 3", component: "Calculator3Page" },
			{ title: "Calculator 4", component: "Calculator4Page" },
			{ title: "List", component: "ListPage" },
			{ title: "Scientific", component: "CalculatorScientificPage" },
			{ title: "2", component: "Page2Page" }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
