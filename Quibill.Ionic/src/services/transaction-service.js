var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var TransactionService = (function () {
    function TransactionService(storage) {
        this.storage = storage;
        this.transactions = [];
        this.loadTransactions();
    }
    TransactionService.prototype.addSingleTransaction = function (amount, note, date, type) {
        var _this = this;
        var newTransaction = {
            amount: amount,
            note: note,
            date: date,
            type: type
        };
        this.storage.get("transactions").then(function (storedData) {
            var storedTransactions = JSON.parse(storedData);
            if (storedTransactions && Array.isArray(storedTransactions)) {
                _this.transactions = storedTransactions;
            }
            _this.transactions.push(newTransaction);
            _this.storeTransactions();
            console.log("New transaction added");
        });
    };
    TransactionService.prototype.loadTransactions = function () {
        var _this = this;
        this.storage.get("transactions").then(function (storedData) {
            var storedTransactions = JSON.parse(storedData);
            if (storedTransactions && Array.isArray(storedTransactions)) {
                _this.transactions = storedTransactions;
            }
            else {
                console.log("No transactions found in storage!");
            }
        });
    };
    TransactionService.prototype.storeTransactions = function () {
        this.storage.set("transactions", JSON.stringify(this.transactions));
    };
    TransactionService.prototype.addRecurringTransaction = function (amount, label, recurrence, startdate, type) {
    };
    TransactionService.prototype.removeTransactionAtIndex = function (transactionIndex) {
        this.loadTransactions();
        if (!this.transactions[transactionIndex]) {
            console.log("No transaction found at the specified index: " + transactionIndex);
        }
        else {
            var newTransactions = [];
            //Create a new array and add all transactions except the one at the specified index
            //This seems like too much work, but I'm pretty sure it's the easiest way to remove the item
            for (var i = 0; i < this.transactions.length; ++i) {
                if (i !== transactionIndex) {
                    newTransactions.push(this.transactions[i]);
                }
            }
            this.transactions = newTransactions;
            //Make sure to store the new transactions
            this.storeTransactions();
        }
    };
    TransactionService.prototype.getAllTransactions = function () {
        return this.transactions;
    };
    TransactionService.prototype.getTransactionByIndex = function (index) {
        return this.transactions[index];
    };
    TransactionService.prototype.clearTransactions = function () {
        this.transactions = [];
        this.storage.clear();
    };
    return TransactionService;
}());
TransactionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Storage])
], TransactionService);
export { TransactionService };
//# sourceMappingURL=transaction-service.js.map