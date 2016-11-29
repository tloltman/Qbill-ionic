import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewTransactionPage } from '../pages/new-transaction/new-transaction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewTransactionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewTransactionPage
  ],
  providers: []
})
export class AppModule {}
