import {test, chromium} from "@playwright/test";

test("login into sales force", async ({page}) =>{

 await page.goto("https://login.salesforce.com/")
 await page.locator(`//input[@id="username"]/self::input`).fill("dilipkumar.rajendran@testleaf.com")
 await page.locator(`//label[text()="Username"]/following::input[3]`).fill("TestLeaf@2025")
 await page.locator(`//input[@name="pw"]/following-sibling::input`).click();
 await page.waitForTimeout(10000);
 console.log(await page.title())
 console.log(await page.url())

})