import test from "@playwright/test";


test.use({storageState:"data/auth.json"})

test("Learn to bypass login page using storage state",async({page})=>{
   await page.goto("https://orgfarm-141cbd5f93-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
 await page.waitForTimeout(18000);
    console.log(await page.title());
    console.log(await page.url())
})