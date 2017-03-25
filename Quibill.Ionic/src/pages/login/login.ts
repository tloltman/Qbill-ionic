import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/authentication-service';

import { UserRegisterPage } from '../user-register/user-register';
import { HomePage } from '../home/home';
 
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  
  private username: string;
  private password: string;

  public errors: any = [];

  constructor(public authService: AuthService, public navCtrl: NavController,
      public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidEnter() {
      this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
  }


  login(username: string , password: string) {
      this.authService.getToken(this.username, this.password).subscribe(
          data => {
              this.authService.myAuthToken = data.access_token;
              this.navCtrl.setRoot(HomePage);
          },
          error => {
              console.log(error); 
              this.errors.push(error)
          });
  }

  navigateToRegisterPage() {
      this.navCtrl.push(UserRegisterPage);
  }

  }


