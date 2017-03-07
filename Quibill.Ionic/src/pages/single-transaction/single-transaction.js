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
import { NavController, NavParams } from 'ionic-angular';
import { TransactionService } from '../../services/transaction-service';
/*
  Generated class for the NewSingleTransaction page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SingleTransactionPage = (function () {
    function SingleTransactionPage(navCtrl, navParams, transactionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionService = transactionService;
        this.transactionType = this.navParams.data;
    }
    SingleTransactionPage.prototype.cancelTransactionPressed = function () {
        this.navCtrl.popToRoot();
    };
    SingleTransactionPage.prototype.submitTransaction = function () {
        this.transactionService.addSingleTransaction(this.amount, this.note, this.startDate, this.transactionType);
        this.navCtrl.popToRoot();
    };
    return SingleTransactionPage;
}());
SingleTransactionPage = __decorate([
    Component({
        selector: 'page-single-transaction',
        templateUrl: 'single-transaction.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, TransactionService])
], SingleTransactionPage);
export { SingleTransactionPage };
//# sourceMappingURL=single-transaction.js.map