import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import $ from 'jquery';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    //Make Ajax request
      console.log('login button clicked');
      //HACK hardcoding login info for testing ajax.
      var loginData = {
          grant_type: 'password',
          username: $('Admin1').val(),
          password: $('password123').val()
      }

      $.ajax({
          type: 'POST',
          url: 'http://localhost:61180/Token',
          contentType: 'application/x-www-form-urlencoded; charset=utf-8',
          data: loginData
      });
  }

}
