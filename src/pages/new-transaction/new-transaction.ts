import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'new-transaction.html'
})
export class NewTransactionPage {

    public transactionType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.transactionType = this.navParams.data;
     //for testing (-baruch) console.log('**nav params:', this.navParams.data);
     //for testing (-baruch) console.log('transactionType: ', this.transactionType);

    }

  cancelTransactionPressed() {
      this.navCtrl.popToRoot();
    
  }

}
