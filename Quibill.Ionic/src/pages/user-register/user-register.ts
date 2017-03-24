
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home'
import { AuthService } from '../../services/authentication-service';


@Component({
    selector: 'page-user-register',
    templateUrl: 'user-register.html'
})
export class UserRegisterPage {

    public errors: any = [];
    private userEmail: string;
    private userPassword: string;
    private userConfirmPassword: string;

    constructor(public authService: AuthService, public navCtrl: NavController,
        public navParams: NavParams, public menuCtrl: MenuController) {
        this.menuCtrl.enable(false);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    registerUser() {
        this.authService.registerUser(this.userEmail, this.userPassword, this.userConfirmPassword).subscribe(
            data => {
                this.authService.getToken(this.userEmail, this.userPassword).subscribe(
                    data => {
                        this.authService.myAuthToken = data.access_token;
                        this.navCtrl.setRoot(HomePage);
                    },
                    error => {
                        console.log(error);
                        this.errors.push(error)
                    });
            },
            error => {
                this.errors = [''];
                if (error != 'Server error') {
                    for (var errorProp in error) {
                        if (error.hasOwnProperty(errorProp)) {
                            var errorArray = error[errorProp];
                            if (errorArray.length) {
                                for (var i = 0; i < errorArray.length; ++i) {
                                    this.errors.push(errorArray[i]);
                                    console.log(errorArray[i]);
                                }
                            }
                        }
                    }
                }
                if (error == 'Server error')
                    this.errors.push(error);
            });
    }

}