import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../app-settings';

import { Storage } from '@ionic/storage';


@Injectable()
export class TransactionService {

  transactions = [];

  constructor(public storage: Storage) {
    this.loadTransactions();
  }
  
  addSingleTransaction(amount: number, note: string, date: string, type: string) {
    let newTransaction = {
      amount: amount,
      note: note,
      date: date,
      type: type
    };

    this.storage.get("transactions").then((storedData) => {
      let storedTransactions = JSON.parse(storedData);
      if(storedTransactions && Array.isArray(storedTransactions)) {
        this.transactions = storedTransactions;
      }
      this.transactions.push(newTransaction);
      this.storeTransactions();
      console.log("New transaction added");
    });


  }
  
  loadTransactions() {
    this.storage.get("transactions").then((storedData) => {
      let storedTransactions = JSON.parse(storedData);
      if(storedTransactions && Array.isArray(storedTransactions)) {
        this.transactions = storedTransactions;
      } else {
        console.log("No transactions found in storage!");
      }
    });
  }
  
  storeTransactions() {
    this.storage.set("transactions", JSON.stringify(this.transactions));
  }

  addRecurringTransaction(amount: number, label: string, recurrence: string, startdate: string, type: string) {

  }

  removeTransactionAtIndex(transactionIndex) {
    this.loadTransactions();
    if(!this.transactions[transactionIndex]) {
      console.log("No transaction found at the specified index: " + transactionIndex);
    } else {
      let newTransactions = [];
      //Create a new array and add all transactions except the one at the specified index
      //This seems like too much work, but I'm pretty sure it's the easiest way to remove the item
      for(let i = 0; i < this.transactions.length; ++i) {
        if(i !== transactionIndex) {
          newTransactions.push(this.transactions[i]);
        }
      }
      this.transactions = newTransactions;
      //Make sure to store the new transactions
      this.storeTransactions();
    }
  }
  
  getAllTransactions() {
    return this.transactions;
  }
  
  getTransactionByIndex(index: number) {
    return this.transactions[index];
  }

  clearTransactions() {
    this.transactions = [];
    this.storage.clear();
  }

}