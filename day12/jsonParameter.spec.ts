import { test } from "@playwright/test";
import credData from "K:/Testleaf-working/data/LF_Login.json";
import { parse } from "csv-parse/sync";
import fs from "fs"

//1. extract content from csv and provide it to the parser
//2.customize the parse the object
let records:any[] = parse(fs.readFileSync("K://Testleaf-working//data//LF_Lead.csv"),{columns:true,skip_empty_lines:true})

test.describe("json param", () => {

    for (let cred of credData){

        for(let testData of records){

            test(`create lead - ${cred.role} - ${testData.dataSetNo as string}`, async ({ page }) => {

            await page.goto("https://leaftaps.com/opentaps/control/main");

            await page.locator("#username").fill(cred.username);

            await page.locator(".inputLogin").nth(1).fill(cred.password);

            await page.locator(".decorativeSubmit").click();

            await page.locator(".crmsfa").click();

            await page.getByText("Leads", { exact: true }).click();
                
            await page.getByRole("link", { name: "Create Lead", exact: true }).click();

            await page.locator("#createLeadForm_companyName").fill(testData.companyName as string)
            
            await page.locator("#createLeadForm_firstName").fill(testData.firstName as string)

            await page.locator("#createLeadForm_lastName").fill(testData.lastName as string)

        })

        }

        
    }

});

