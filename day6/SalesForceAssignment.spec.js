import {expect, test} from "@playwright/test";

test("Create a new Account ", async({page}) => {

    //1. Navigate to the url https://login.salesforce.com/
    await page.goto('https://login.salesforce.com/')
    //2. Enter username using getByLabel
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    //3. Enter password using getByLabel
    await page.getByLabel("Password").fill("TestLeaf@2025")
    //4. Click Login
    await page.locator("#Login").click();
    console.log("login done");

    await page.waitForTimeout(3000)
    console.log(await page.title())

    //5. Verify the title and url of the page using appropriate assertions
    await expect(page).toHaveTitle("Home | Salesforce")
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home")

    //6.Click App Launcher using the class locator
    await page.locator(".slds-icon-waffle").click()
    await page.waitForTimeout(3000)

    //7.Click View All using getByText
    await page.getByText("View All",{exact:true}).nth(2).click()

    //8.Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.getByPlaceholder('Search apps or items...', {exact:true}).fill("Service")

    //9.Click Service using index based XPath
    await page.locator(`(//p[@class="slds-truncate"])[1]`).click()

    //10.Click Accounts using attribute based CSS selector
    await page.locator(`a[title="Accounts"]`).click()

    //11. Click New using getByRole
    await page.getByRole(`button`,{name:"New"}).click();

    //12. Enter Account name using attribute based CSS selector
    await page.locator(`input[name="Name"]`).fill("Dilip Kumar")

    //13. Click Save button using XPath
    await page.locator(`//button[text()="Save"]`).click()

    //14.Verify the toast message displayed
    await expect(page.getByText(`Account "Dilip Kumar" was created`)).toBeVisible();

})



