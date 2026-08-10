import {test,chromium,firefox} from "@playwright/test";

test("launch edge and firefox", async() => {

    const edgeBrowser = await chromium.launch({channel: "msedge", headless: false})
    const fireFoxBrowser = await firefox.launch({channel: "firefox", headless:false})

    const edgePage = await edgeBrowser.newPage();
    const firefoxPage = await fireFoxBrowser.newPage();

    await edgePage.goto("https://www.redbus.in/")
    await firefoxPage.goto("https://www.flipkart.com/")

    console.log(await edgePage.title(), await firefoxPage.title())
    console.log(await edgePage.url(), await firefoxPage.url())

})