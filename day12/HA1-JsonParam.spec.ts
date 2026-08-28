import{test,expect} from "@playwright/test"

import leadData from "K://Testleaf-working//data//leadData.json"

for(const data of leadData){
    test(`Test the page using the ${data.firstName} data`, async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("democsr")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
        await page.locator('text = CRM/SFA').click()
        await page.getByRole('link',{name:"Create Lead",exact:true}).click()
        await page.locator("#createLeadForm_companyName").fill(data.companyName)
        await page.locator("#createLeadForm_firstName").fill(data.firstName)
        await page.locator("#createLeadForm_lastName").fill(data.lastName)
        await page.locator('#createLeadForm_dataSourceId').selectOption({label:data.source})
        await page.locator('#createLeadForm_marketingCampaignId').selectOption(data.marketingCampaign)
        await page.locator('#createLeadForm_industryEnumId').selectOption({index:5})
        await page.locator('#createLeadForm_currencyUomId').selectOption(data.currency)
        await page.locator('#createLeadForm_generalCountryGeoId').selectOption(data.country)
        await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption(data.state)
        

        const states = page.locator("#createLeadForm_generalStateProvinceGeoId option");
        const stateCount = await states.count()
        for(let i=1; i<stateCount; i++){
            console.log(i,await states.nth(i).innerText())
        }

        await page.locator("//input[contains(@class, 'smallSubmit')]/parent::td").click()
      
    }) 
}