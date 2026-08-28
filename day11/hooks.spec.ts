import { test } from "@playwright/test";

test.describe.serial("managing the hooks", { tag: "@hooks" }, async()  => {
    test.beforeAll("basic lead level config", async () => {
        console.log("run once per execution")
    })

    test.beforeEach("pre-conditions", async ({ page }) => {
        await page.goto("https://leaftaps.com/opentaps/control/main");

        await page.locator("#username").fill("democsr");
        await page.locator(".inputLogin").nth(1).fill("crmsfa");
        await page.locator(".decorativeSubmit").click();
        await page.locator(".crmsfa").click();
    })


    test("create lead", async ({ page }) => {
        await page.getByText('Leads', { exact: true }).click()
        await page.getByRole('link',{name:"Create Lead",exact:true}).click()
    })

    test("create contact", async ({ page }) => {
        await page.getByText("Contacts", { exact: true }).click()
    })

    test("create account", async ({ page }) => {
        await page.getByText("Accounts", { exact: true }).click()

    })


    test.afterEach("print the status", async ({ }, testInfo) => {
        console.log("it will be executed after test annotation")
        console.log(testInfo.title, testInfo.status)
    })

    test.afterAll("global tear down annotation", async () => {
        console.log("closed the resources before execution gets completed")
    })

})

