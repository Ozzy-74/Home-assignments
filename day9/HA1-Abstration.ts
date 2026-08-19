interface Payments{
cashOnDelivery():void;
upiPayments():void
cardPayments():void;
internetBanking() :void;

}

abstract class Canarabank implements Payments{
    abstract cashOnDelivery(): void;
    abstract upiPayments(): void;
    abstract cardPayments(): void;
    abstract internetBanking(): void;

    recordPaymentDetails():void{
        console.log("payment details recorded")
    }
}

class Amazon extends Canarabank{
    cashOnDelivery(): void {
        console.log("Selected payment: COD")
    }
    upiPayments(): void {
        console.log("Selected payment: UPI")
    }
    cardPayments(): void {
        console.log("Selected payment: DEBIT CARD ")
    }
    internetBanking(): void {
        console.log()
    }
}

const amazon = new Amazon();
amazon.cashOnDelivery();
amazon.cardPayments();
amazon.recordPaymentDetails()