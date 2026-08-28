import { test, expect } from "@playwright/test";

test.use({ storageState: "data/HA-1.json" })

test.describe("Test the salesforce homepage", () => {

    test.only("Skip the login using json", async ({ page }) => {
        await page.goto("https://orgfarm-141cbd5f93-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

        await expect(page).toHaveURL("https://orgfarm-141cbd5f93-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
        console.log("Logged into homepage")
    })

    test("Navigate to salesforce page", async ({ page }) => {
        test.slow()
         await page.goto("https://login.salesforce.com/")

        await expect(page).not.toHaveURL("https://orgfarm-141cbd5f93-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
        console.log("Logged into homepage")

    })

    test.fail("Fail the session",async({page}) =>{
         await page.goto("https://orgfarm-141cbd5f93-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

         await expect(page).toHaveURL("/INVALID")
         throw new Error("failed due to assertion")
    })


})

