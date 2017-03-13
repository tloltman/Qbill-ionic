import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/authentication-service';

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

  
  public username: string;
  public password: string;

  public errors: any = [];

  constructor(public authService: AuthService, public navCtrl: NavController,
      public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  login(username: string , password: string) {
      this.authService.getToken(this.username, this.password).subscribe(
          data => {
              this.authService.myAuthToken = data.access_token; 
              alert('You are logged in');
          },
          error => {
              console.log(error);
              this.errors.push(error)
          });
  }

  logout() {
      this.authService.logout().subscribe(
          data => {
              //clear the authToken property, then log/alert successful logout  
              alert('Logout successful');
          },
          error => {
              console.log(error);
          });
}

  }


