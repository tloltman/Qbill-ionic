import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NewTransactionPage } from '../new-transaction/new-transaction';

@Component({
  selector: 'page-homepage',
  templateUrl: 'home.html'
  
})
export class HomePage {

    transactionType = [{ type: 'Make A Withdrawal' }, { type: 'Make A Deposit' }];
   // withdrawal: string = 'Make A Withdrawal';
   // deposit: string = 'Make A Deposit';

    constructor(public navCtrl: NavController) { }

    pressedWithdraw() {
        this.navCtrl.push(NewTransactionPage, this.transactionType[0]);
    }

    pressedDeposit() {
        this.navCtrl.push(NewTransactionPage, this.transactionType[1]);     
    }

}
