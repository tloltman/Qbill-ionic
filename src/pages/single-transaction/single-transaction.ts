import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  transactionType;
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

}
