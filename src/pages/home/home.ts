import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTransactionPage } from '../single-transaction/single-transaction';
import { RecurringTransactionPage } from '../recurring-transaction/recurring-transaction';

@Component({
  selector: 'page-homepage',
  templateUrl: 'home.html'
})
export class HomePage {
    remainingBudgetDollars: number;
    nextPayDate: string;
  
    constructor(public navCtrl: NavController) {
      this.remainingBudgetDollars = 0.00;
    }
    
    transactionType = [
      {type: 'Make a Withdrawal'},
      {type: 'Make a Deposit'},
      {type: 'Set a Recurring Withdrawal'},
      {type: 'Set a Recurring Deposit'}];
    // withdrawal: string = 'Make A Withdrawal';
    // deposit: string = 'Make A Deposit';
  
    pressedTransaction(typeIndex) {
      if(typeIndex < 2) {
        this.navCtrl.push(SingleTransactionPage, this.transactionType[typeIndex].type);
      } else {
        this.navCtrl.push(RecurringTransactionPage, this.transactionType[typeIndex].type);
      }

    }

    hasNextPayDate() {
      return this.nextPayDate ? true : false;
    }
}
