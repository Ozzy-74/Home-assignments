import {expect, test} from "@playwright/test"

test("Java script alerts", async({page}) => {

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.once("dialog", async(dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("I am a JS Alert")
    await dialog.accept()
})
await page.getByRole('button',{name:"Click for JS Alert"}).click()

page.once("dialog",async(dialog) =>{
    expect(dialog.type()).toBe("confirm")
    expect(dialog.message()).toBe("I am a JS Confirm");
    await dialog.accept()
})
await page.getByRole('button',{name:"Click for JS Confirm"}).click()

page.once("dialog",async(dialog) =>{
    expect(dialog.type()).toBe('confirm')
    expect(dialog.message()).toBe("I am a JS Confirm");
    await dialog.dismiss()
})
await page.getByRole('button',{name:"Click for JS Confirm"}).click()

page.once("dialog",async(dialog) =>{
    expect(dialog.type()).toBe('prompt')
    expect(dialog.message()).toBe("I am a JS prompt");
    await dialog.accept("Krishna")
})
await page.getByRole('button',{name:"Click for JS Prompt"}).click()

await expect(page.locator("#result")).toHaveText("You entered: Krishna")

})