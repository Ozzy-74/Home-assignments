import {test,chromium,expect} from "@playwright/test"
 test("learn iframes" , async({page}) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const firstFrame=await page.frameLocator(`//frame[@name="packageListFrame"]`)
    await firstFrame.locator(`//a[text()="java.applet"]`).first().click()



})
