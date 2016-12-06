import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class TransactionData {
  
  constructor(public storage: Storage) {}
  
  addSingleTransaction(amount: number, note: string, date: string, type: string) {
    let newTransaction = {
      amount: amount,
      note: note,
      date: date,
      type: type
    };
    debugger;
    this.storage.get("transactions").then((value) => {
      let transactions = JSON.parse(value);
      if(!transactions || !Array.isArray(transactions)) {
        transactions = [newTransaction];
        this.storage.set("transactions",JSON.stringify(transactions));
      } else {
        transactions.push(newTransaction);
        this.storage.set("transactions", JSON.stringify(transactions));
      }
      debugger;
    });
  }

  addRecurringTransaction(amount: number, label: string, recurrence: string, startdate: string, type: string) {

  }

  removeTransaction(transactionId) {

  }
  
  getTransactionById(id: number) {

  }

  getNextTransactionId() {
    return 0;
  }

}

class Transaction {
  amount: number = 0;
  note: string = "";
  date: string = "";
  type: string = "";

  constructor(amount: number, note: string, date: string, type: string) {
    this.amount = amount;
    this.note = note;
    this.date = date;
    this.type = type;
  }
}