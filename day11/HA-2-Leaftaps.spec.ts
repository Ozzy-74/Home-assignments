import{test,expect} from "@playwright/test"

const URL = "https://leaftaps.com/opentaps/control/main"
const Username = "democsr"
const password = "crmsfa"

test.describe("Test the CRM/SFA page",()=>{

    test("Login",async({page}) =>{
        await page.goto(URL);
        await page.locator("#username").fill(Username)
        await page.locator("#password").fill(password)
        await page.locator(".decorativeSubmit").click()
        const loginUrl1 = page.url()
        await expect(page).toHaveURL(loginUrl1)
        console.log("Logged in!")
    })

    test.fail("Fail the test",async({page})=>{
        await page.goto(URL);
        await page.locator("#username").fill("NoUsername")
        await page.locator("#password").fill("Nopassword")
        await page.locator(".decorativeSubmit").click()
        await page.locator(".decorativeSubmit").click()
        const loginUrl2 = page.url()
        await expect(page).not.toHaveURL(loginUrl2)
        console.log("Failed due to assertion")
    })

    test.fixme("Code with bug",async({page}) =>{
        await page.goto(URL);
        await page.locator("#username").fill("NoUsername")
        await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/login")
    })

    test("Check CRM/SFA",async({page}) =>{
        await page.goto(URL);
        await page.locator("#username").fill(Username)
        await page.locator("#password").fill(password)
        await page.locator(".decorativeSubmit").click()
        const loginUrl3 = page.url()
        await expect(page).toHaveURL(loginUrl3)
        console.log("Logged in!")
        await page.locator('text = CRM/SFA').click()
        const crmUrl = await page.url()
        await expect(page).toHaveURL(crmUrl)
    })
})