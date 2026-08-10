import test from "@playwright/test"

test("locate element using advance relative xpath", async({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/login");
    //define a relationship between tags
    //total 8 important tag relationship

    //------1. parent to child: (xpathOfParent)/(childTagName)
   // await page.locator(`//p[@class ="top"]/input`).fill("democsr")

    //------2. child to parent: (xpathOfTheChild)/(parent::parentTagname

    //------3, grand parent to grand child: (xpathOfGrandParent)//(grandChildTag)


    //------4, grand child to grand parent: (xpathOfGrandChild)/ancestor::tagNameOfGP
    //label [text()="Password"]/ancestor::form
    
    //------5, SIBLING - elder to younger: xpathOfES/following-sibling::tagNameOfYS
    //label[text()="Password"]/following-sibling::input
    await page.locator(`//label[text()="Password"]/following-sibling::input`).fill("democsr")

    //------6, SIBLING - younger to elder: xpathOfYoungerSibling/preceding-sibling::tagNameOfES
    //input[@id="password"]/preceding-sibling::label

    //------7, Cousin - elder cousin to younger cousin: xpathOfElderCousin/following::tagNameOfYC
     //input[@id="password"]/following::input


    //------8, Cousin - younger to elder cousin
    //input[@type = "submit"]/preceding::input[1]
   
})  

