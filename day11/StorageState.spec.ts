import test from "@playwright/test";

test("Learn Storage State",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("krishmlky74.7a2672abb1ba@agentforce.com")
    await page.locator("#Login").click();
    await page.locator("#password").fill("Password@1234")
    await page.locator("#Login").click();
    console.log("login done");

    await page.waitForTimeout(18000);
    console.log(await page.title());
    console.log(await page.url())
  await page.context().storageState({path:"data/auth.json"})
})