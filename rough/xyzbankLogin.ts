import { Page, Locator } from "@playwright/test";


export class LoginPage {
    private page: Page;

    private customer: Locator
    private selectUsername: Locator
    private clickLogin: Locator
    private clickTransactions: Locator;
    private transHistory: Locator;
    private deposit: Locator;
    private managerLogin:Locator;
    private customerButton:Locator;
    private customerData:Locator;
    



    constructor(page: Page) {
        this.page = page

        this.customer = page.getByRole('button', { name: "Customer Login", exact: true })
        this.selectUsername = page.locator("#userSelect")
        this.clickLogin = page.getByRole('button', { name: "Login", exact: true })
        this.clickTransactions = page.getByRole('button', { name: "Transactions", exact: true })
        this.transHistory = page.locator("table.table.table-bordered.table-striped")
        this.deposit = page.getByRole("button", { name: "Deposit", exact: true })

        this.managerLogin = page.getByRole("button",{name:"Bank Manager Login",exact:true})
        this.customerButton = page.getByRole("button",{name:"Customers",exact:true})
        this.customerData = page.locator("table.table.table-bordered.table-striped");
    }

    async selectCustomer() {
        await this.customer.click()
    }

    async selectUserName() {
        await this.selectUsername.selectOption({ index: 1 })
    }

    async Login() {
        await this.clickLogin.click()
    }

   
    async transaction() {
        await this.clickTransactions.click()
    }

    async transactionHistory() {
        await this.transHistory.waitFor({ state: "visible" });
        const rows = this.transHistory.locator("tbody tr");
        const count = await rows.count();
        console.log("Rows:", count);

        for (let i = 0; i < count; i++) {
            const data = await rows.nth(i).locator("td").allInnerTexts();
            console.log(data);
        }
    }

    async depositAmount() {
        await this.deposit.click();


    }

     async loginAsCustomer() {

        await this.selectCustomer();

        await this.selectUserName();

        await this.Login();
    }

    async manager(){
        await this.managerLogin.click()
    }

    async customerBtn(){
        await this.customerButton.click()

    }

    async customerTable(){
        await this.customerData.waitFor({state:"visible"})
        const rows = await this.customerData.locator("tbody tr")
        const count = await rows.count()

        console.log(rows, count)
        

        for(let i=0; i<  count; i++){
            const data = await rows.nth(i).locator("tr,td").allInnerTexts();
            console.log(data)

        }
    }

}