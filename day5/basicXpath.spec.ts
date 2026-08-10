import {test,chromium} from "@playwright/test"

test("test sales force", async({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/login");

    //--------absolute xpath
    await page.locator("xpath=/html/body/div[2]/div[2]/div/form/p[1]/input").fill("democsr")

    //--------text based xpath: //tagname[text() = "textOfTheElement"]
    const userNameOnPage = page.locator(`//label[text() = "Username"]`)
    console.log("username located")
    
   // --------relative xpath : start with //
   // await page.locator(`//input[@id="password"]`).fill("crmsfa")

    //--------collection based xpath
    await page.locator(`(//input[@class = "inputLogin"])[2]`).fill("crmsfa")


    //await page.locator(`//input[@type="submit"]`).click();
  
   //-------based on the partial match: tagname[contains(@class, "partialAttributeValue")]
   //await page.locator(`//input[contains(@class, "Submit")]`).click();
   
   //------partial text based search: `tagname[contains(text(), "submit")]`
   await page.locator(`//input[contains(@class,"Submit")]`).click()


});