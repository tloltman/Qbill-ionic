import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingleTransactionPage } from '../pages/single-transaction/single-transaction';
import { RecurringTransactionPage } from '../pages/recurring-transaction/recurring-transaction';
import { AllTransactionsPage } from '../pages/all-transactions/all-transactions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingleTransactionPage,
    RecurringTransactionPage,
    AllTransactionsPage
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
    AllTransactionsPage
  ],
  providers: []
})
export class AppModule {}
