import {test } from "@playwright/test";

test("Product purchase", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog" , async(dialog) => {
        let alertType = dialog.type()
       switch(alertType){
        case "confirm":
            dialog.accept()
            break;

        case "prompt":
            await dialog.accept("krishna")
            break;

            default:
                await dialog.dismiss()
                break;
       }
    })

    //1. simple model alert
    await page.locator(`//button[@id="j_idt88:j_idt91"]`).click()
     await page.waitForTimeout(2000)
     console.log("clicked")
    //2. confirm alert
    await page.locator(`//button[@id="j_idt88:j_idt93"]`).click()
    await page.waitForTimeout(2000)
    //3.sweet alert
    await page.locator(`//button[@id="j_idt88:j_idt100"]`).click()
    await page.waitForTimeout(2000)

    await page.locator(`//a[@class="ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all"]/span`).nth(1).click()
    //4. prompt
    await page.locator(`//button[@id="j_idt88:j_idt104"]`).click()
    await page.waitForTimeout(2000)

});