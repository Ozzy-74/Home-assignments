import{test, expect} from "@playwright/test"

test("Fetch the login json", async({page}) =>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole('textbox',{name:"Username",exact:true}).fill("krishmlky74.7a2672abb1ba@agentforce.com")
    await page.getByRole('button',{name:"Log In",exact:true}).click()

    await page.getByRole('textbox',{name:"Password",exact:true}).fill("Password@1234")
    await page.getByRole('button',{name:"Log In",exact:true}).click()

    await page.waitForTimeout(18000)

    await page.context().storageState({path:"data/HA-1.json"})
    

})