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

		this.pages = [
			{ title: "Calculator 1", component: "Calculator1Page" },
			{ title: "Calculator 2", component: "Calculator2Page" },
			{ title: "Calculator 3", component: "Calculator3Page" },
			{ title: "Calculator 4", component: "Calculator4Page" },
			{ title: "Calculator 5", component: "Calculator5Page" },
			{ title: "Calculator 6", component: "Calculator6Page" },
			{ title: "List", component: "ListPage" },
			{ title: "Scientific", component: "CalculatorScientificPage" },
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
