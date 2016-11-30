import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingleTransactionPage } from '../pages/single-transaction/single-transaction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingleTransactionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingleTransactionPage
  ],
  providers: []
})
export class AppModule {}
