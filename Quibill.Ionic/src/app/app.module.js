var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingleTransactionPage } from '../pages/single-transaction/single-transaction';
import { RecurringTransactionPage } from '../pages/recurring-transaction/recurring-transaction';
import { AllTransactionsPage } from '../pages/all-transactions/all-transactions';
import { TransactionService } from '../services/transaction-service';
import { LoginPage } from '../pages/login/login';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            SingleTransactionPage,
            RecurringTransactionPage,
            AllTransactionsPage,
            LoginPage
        ],
        imports: [
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            SingleTransactionPage,
            RecurringTransactionPage,
            AllTransactionsPage,
            LoginPage
        ],
        providers: [
            TransactionService,
            Storage
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map