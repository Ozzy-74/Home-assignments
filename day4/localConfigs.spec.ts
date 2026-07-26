import test, { chromium } from "@playwright/test";

test("learn to create configs", async () => {

    const browser = await chromium.launch({ channel: "msedge", headless:false
    });

    const context1 = await browser.newContext();


    const page1 = await context1.newPage();

    await page1.goto("https://leaftaps.com/opentaps/control/main");

    const titleOfPage = await page1.title();

    console.log(`The landing page title is: ${titleOfPage}`);

    //await browser.close();
});