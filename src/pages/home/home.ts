import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTransactionPage } from '../single-transaction/single-transaction';

import { NewTransactionPage } from '../new-transaction/new-transaction';

@Component({
  selector: 'page-homepage',
  templateUrl: 'home.html'
  
})
export class HomePage {

<<<<<<< HEAD
  remainingBudgetDollars: number;
  nextPayDate: string;
  
  constructor(public navCtrl: NavController) {
    this.remainingBudgetDollars = 0.00;
    this.nextPayDate = '11/15/2016';
  }
=======
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

>>>>>>> QB-15-buttons-on-home-page-should-open-new-transaction-pages
}
