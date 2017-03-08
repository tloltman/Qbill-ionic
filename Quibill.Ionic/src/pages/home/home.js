var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleTransactionPage } from '../single-transaction/single-transaction';
import { RecurringTransactionPage } from '../recurring-transaction/recurring-transaction';
import { AllTransactionsPage } from '../all-transactions/all-transactions';
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.transactionType = Object.freeze({
            Withdrawal: 'Withdrawal',
            Deposit: 'Deposit'
        });
        // withdrawal: string = 'Make A Withdrawal';
        // deposit: string = 'Make A Deposit';
        this.viewTransactionsTitle = 'All Transactions';
        this.remainingBudgetDollars = 0.00;
    }
    HomePage.prototype.pressedTransaction = function (recurring, transactionType) {
        if (!recurring) {
            this.navCtrl.push(SingleTransactionPage, transactionType);
        }
        else {
            this.navCtrl.push(RecurringTransactionPage, transactionType);
        }
    };
    HomePage.prototype.pressedViewTransactions = function () {
        this.navCtrl.push(AllTransactionsPage, this.viewTransactionsTitle);
    };
    HomePage.prototype.hasNextPayDate = function () {
        //will return false if nextPayDate is undefined, null, or empty string ("")
        return this.nextPayDate ? true : false;
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-homepage',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map