import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/authentication-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
 

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private authService: AuthService) {
      this.initializeApp();

      if (authService.isUserLoggedIn() == true) this.rootPage = HomePage;
      else this.rootPage = LoginPage;


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Quibill', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
      this.authService.logout()
      if (this.authService.isUserLoggedIn() == false) {
              this.nav.setRoot(LoginPage);
          }
          else {
              alert('Logout unsuccessful');
          }
  }

}
