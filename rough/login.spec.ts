import { test, expect } from "@playwright/test";
import { LoginPage } from "./xyzbankLogin";

test.describe.serial("Describe test", () => {

    test.beforeEach("Open banking application", async ({ page }) => {

        await page.goto(
            "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
        );

    });

    test("Customer login and transaction", async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.loginAsCustomer();

        await loginPage.transaction();

        await loginPage.transactionHistory();

    });

    test("test deposit", async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.loginAsCustomer();

        await loginPage.depositAmount();

    });

    test ("test customer data",async({page}) =>{
        const loginPage = new LoginPage(page);

        await loginPage.manager()
        await loginPage.customerBtn()
        await loginPage.customerTable()

    })

});