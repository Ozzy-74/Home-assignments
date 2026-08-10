import {test,chromium,expect} from "@playwright/test"

test("test sales force", async({page}) => {
    //separate function to locate a element?-yes
   // 7 separate function available for playwright locators

   await page.goto("https://leaftaps.com/opentaps/control/login")

//    getByRole()---role: textbox

await page.getByRole(`textbox`, {name:"Username"}).fill("democsr")

// getByLabel()
await page.getByLabel(`password`).fill("crmsfa")
await page.getByRole(`button`).click();
const welcomeMessage = await page.getByRole(`heading`).innerText();
console.log(welcomeMessage);
await page.getByRole(`link`,{name: "CRM/SFA"}).click()

// getByText()
await page.getByText(`Leads`, {exact:true}).click()
await page.getByText(`Create Lead`).click()

// getByPlaceholder()

// getByAltText()
await page.getByAltText(`opentaps CRM`).click();

// getByTitle()

// getByTestId()
   
});