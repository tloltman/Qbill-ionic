import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NewSingleTransaction page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-transaction',
  templateUrl: 'single-transaction.html'
})
export class SingleTransactionPage {

  public transactionType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionType = this.navParams.data;
  }

  cancelTransactionPressed() {
    this.navCtrl.popToRoot();
  }

}
