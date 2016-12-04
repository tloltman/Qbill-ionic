import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-single-transaction',
  templateUrl: 'all-transactions.html'
})
export class AllTransactionsPage {

  public transactionType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionType = this.navParams.data;
  }

  cancelTransactionPressed() {
    this.navCtrl.popToRoot();
  }

}
