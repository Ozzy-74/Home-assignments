"use strict";
class Canarabank {
    recordPaymentDetails() {
        console.log("payment details recorded");
    }
}
class Amazon extends Canarabank {
    cashOnDelivery() {
        console.log("Selected payment: COD");
    }
    upiPayments() {
        console.log("Selected payment: UPI");
    }
    cardPayments() {
        console.log("Selected payment: DEBIT CARD ");
    }
    internetBanking() {
        console.log();
    }
}
const amazon = new Amazon();
amazon.cashOnDelivery();
amazon.cardPayments();
amazon.recordPaymentDetails();
