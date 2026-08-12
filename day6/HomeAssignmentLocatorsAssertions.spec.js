import test, { chromium, expect } from "@playwright/test";

test("Locators", async ({page}) => {

    //Assignment: 1 Create a Lead

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`//input[@id="username"]`).fill("DemoCSR")
    await page.locator(`//input[@id="password"]`).fill("crmsfa")
    await page.getByRole(`button`, {name: "Login"}).click()
    await page.locator(`//div[@class="crmsfa"]`).click()
    await page.getByRole(`link`,{name: "Leads" , exact:true}).click()
    await page.waitForTimeout(2000)
    await page.getByRole('link',{name: "Create Lead", exact:true}).click();
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("test leaf")
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("krishna")
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("kumar")
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill("Mr")
    await page.locator (`#createLeadForm_generalProfTitle`).fill('Playwright')
    await page.locator(`#createLeadForm_annualRevenue`).fill("20LPA")
    await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill("Testing")
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("74185960")
    
    await expect(page.locator("#createLeadForm_companyName")).toHaveValue("test leaf");
    await expect(page.locator("#createLeadForm_firstName")).toHaveValue("krishna");
    await expect(page.locator("#createLeadForm_lastName")).toHaveValue("kumar");

    expect(await page.locator("#createLeadForm_companyName").inputValue()).toBe("test leaf");
    expect(await page.locator("#createLeadForm_firstName").inputValue()).toBe("krishna");
    expect(await page.locator("#createLeadForm_lastName").inputValue()).toBe("kumar");
    
    await page.getByRole('button',{name:"Create Lead"}).click()

    //Assignment: 2 Edit a Lead

    await page.locator(`//a[@href="/crmsfa/control/findLeads"]`).filter({hasText:"Find Leads"}).click()
    await page.getByRole('textbox',{name: "First name:"}).fill("krishna")
    await page.getByRole('button',{name:"Find Leads", exact:true}).click()
    await page.locator(`//table[@class="x-grid3-row-table"]//td//div//a`).first().click()
    await page.locator(`//a[@class = "subMenuButton"]`).filter({hasText:"Edit"}).click()
    const editName = page.locator(`//input[@name="companyName" and @value="test leaf"]`)
    await editName.clear()
    await editName .fill("leaf test")
    await expect(page.locator(`//input[@name="companyName"]`)).toHaveValue("leaf test")

    const revenue = page.locator(`//input[@id="updateLeadForm_annualRevenue"]`)
    await revenue.clear()
    await revenue.fill("30")
     await expect(page.locator(`//input[@id="updateLeadForm_annualRevenue"]`)).toHaveValue("30")

    await page.locator(`//textarea[".inputBox"]`).first().fill("Learning playwright")
    await expect(page.locator(`//textarea[".inputBox"]`).first()).toHaveValue("Learning playwright")
 
    await page.getByRole('button',{name:"Update",exact:true}).click()

});

