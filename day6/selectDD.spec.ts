import {test,chromium,expect} from "@playwright/test"
 test("learn dropdown" , async({page}) => {

    await page.goto("https://leafground.com/select.xhtml;jsessionid=node0144a7bliiqxj4rz6tmj556gpc274704.node0")

    //fetching values inside drop-down
    // await page.selectOption("select.ui-selectonemenu",{label:"Selenium"})
    // await expect.soft(page.locator("select.ui-selectonemenu")).toHaveValue("Playwright")
    // console.log("fetching values inside drop-down")
    
    const dropDownValues = await page.locator("select.ui-selectonemenu>option").all()
    const count = await dropDownValues.length
    console.log("Total count of values inside the dropdown "+count)

    for(let i=0; i<count;i++){
     const options =await dropDownValues[i].innerText()

     if(options === "Playwright"){
      await page.selectOption("select.ui-selectonemenu",{label:"Playwright"})
     }
    }


  //await page.selectOption("select.ui-selectonemenu ", {label:"Playwright"})
  await expect(page.locator("select.ui-selectonemenu")).toHaveValue("Playwright")
 

 });
