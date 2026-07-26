import {chromium, test} from "@playwright/test"

test("login to sales force", async() => {

    //launching the browser
    const browser = await chromium.launch({headless:false});

    //create context

    const context = await browser.newContext(    // viewport: {
    //     width: 1920,
    //     height: 1080
    // },
    // recordVideo: {
    //     dir: "C:\\Users\\krish\\Videos\\playwright",
    //     size: {
    //         width: 1920,
    //         height: 1080
    //     }
    // }
);

    //create page
    const page = await context.newPage(); 

    //open the URL

    await page.goto("https://login.salesforce.com/");

    //locate input and enter the user name

    await page.locator("#username").fill("krishmlky74.7a2672abb1ba@agentforce.com")

    //enter password

    await page.locator("#password").pressSequentially("Asdf@12345")

    //clink the login

    await page.locator("#Login").click();
    console.log("login done");

    //wait for 10secs

    await page.waitForTimeout(10000);

    //get the title

    const pageTitle = await page.title();
    console.log(`page title ---> ${pageTitle}`);

    //get the URL

    const pageURL = await page.url();
    console.log(`URL--> ${pageURL}`)

    //close the browser
 //   await context.close();
    await browser.close();
});