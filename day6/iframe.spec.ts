import {test,chromium,expect} from "@playwright/test"
 test("learn iframes" , async({page}) => {
    await page.goto("https://leafground.com/frame.xhtml")
    const arrayOfFrames = page.frames()

    for(let i=0; i<arrayOfFrames.length;i++){
        console.log(arrayOfFrames[i].url())
        console.log(arrayOfFrames[i].name())
    }
    //1. frame()
    await page.frame({url:"https://leafground.com/frame.xhtml;jsessionid=node01dwutxor57p9zgf6d929osor375050.node0"})?.getByRole(`button`).click();
    })
