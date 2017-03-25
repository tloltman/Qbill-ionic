import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/authentication-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  
  public email: string;
  public password: string;

  public errors: any = [];

  loginForm: FormGroup;

  submitAttempt: boolean = false; //used to track whether a subit has been made for validation error styling purposes

  constructor(public authService: AuthService, public navCtrl: NavController,
      public menuCtrl: MenuController, public formBuilder: FormBuilder) {

      this.loginForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b')])], //This Validator pattern should cover 99% of valid email addresses.
          password: ['', Validators.compose([Validators.required])]
      });
  }

  ionViewDidEnter() {
      this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
  }

  loginValidation() {

  }


  login(username: string , password: string) {
      this.authService.getToken(this.email, this.password).subscribe(
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


