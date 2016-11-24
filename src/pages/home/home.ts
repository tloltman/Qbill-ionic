import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-homepage',
  templateUrl: 'home.html'
})
export class HomePage {

  remainingBudgetDollars: number;
  nextPayDate: string;
  
  constructor(public navCtrl: NavController) {
    this.remainingBudgetDollars = 125.67;
    this.nextPayDate = '11/15/2016';
  }

}
