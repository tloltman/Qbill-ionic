import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransactionData } from '../../services/transaction-data';

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

  public amount: number;
  public note: string;
  public startDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public transactionData: TransactionData) {
    this.transactionType = this.navParams.data;
  }

  cancelTransactionPressed() {
    this.navCtrl.popToRoot();
  }

  submitTransaction() {
    this.transactionData.addSingleTransaction(this.amount, this.note, this.startDate, this.transactionType);
  }

}
