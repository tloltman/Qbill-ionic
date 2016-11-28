import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTransactionPage } from '../single-transaction/single-transaction';

@Component({
  selector: 'page-homepage',
  templateUrl: 'home.html'
})
export class HomePage {

  remainingBudgetDollars: number;
  nextPayDate: string;
  
  constructor(public navCtrl: NavController) {
    this.remainingBudgetDollars = 0.00;
    this.nextPayDate = '11/15/2016';
  }
}
