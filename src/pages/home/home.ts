import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTransactionPage } from '../single-transaction/single-transaction';
import { RecurringTransactionPage } from '../recurring-transaction/recurring-transaction';

@Component({
  selector: 'page-homepage',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

<<<<<<< HEAD
  remainingBudgetDollars: number;
  nextPayDate: string;
=======
    remainingBudgetDollars: number;
    nextPayDate: string;
>>>>>>> 0e9f271f0154afc90541e1495ffd774f336b26ec
  
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

<<<<<<< HEAD
>>>>>>> QB-15-buttons-on-home-page-should-open-new-transaction-pages
=======
    hasNextPayDate() {
      //will return false if nextPayDate is undefined, null, or empty string ("")
      return this.nextPayDate ? true : false;
    }
>>>>>>> 0e9f271f0154afc90541e1495ffd774f336b26ec
}
