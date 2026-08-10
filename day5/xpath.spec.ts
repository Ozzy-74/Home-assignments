import {test,chromium} from "@playwright/test"

test("test sales force", async({page}) => {

    await page.goto("https://login.salesforce.com/");

    //relative x path
    await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com")
    await page.locator(`//input[@id="password"]`).fill("TestLeaf@2025")
    await page.locator("#Login").click();
    console.log("login done");

    await page.waitForTimeout(10000);
    console.log(await page.title());
    console.log(await page.url())
});