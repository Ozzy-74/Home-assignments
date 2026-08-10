import{test,chromium} from "@playwright/test";

test("Book tickets ", async({page}) =>{
   await page.goto("https://www.pvrcinemas.com/")
   await page.getByRole("heading", {name:"Chennai", exact:true}).click()
   await page.getByAltText("SPIDERMAN BRAND NEW DAY").nth(1).click()

   await page.getByRole('button', {name:"Book Now"}).click()

   const cinema = page.getByText("PVR Heritage RSL ECR Chennai", {  exact: true});

   console.log(await cinema.count());

   await page.locator(".box-slot-moviesession") .filter({ hasText: "10:30 PM" }).first().click();

   await page.getByRole(`button`,{name:"Accept"}).click()

   await page.locator(`//span[@id="PE.PRIME|B:16"]`).click()
   await page.locator(`//span[@id="PE.PRIME|B:15"]`).click()

await page.waitForTimeout(2000);

   const subTotal = await page.locator(".grand-price .bill-amount").innerText();

  console.log(subTotal)

   await page.getByRole("button", { name: "Proceed" }).click();

   const grandTotal = await page.locator(" .grand-tota h6 span").innerText();
   console.log(grandTotal);



//    const rowD = await page.locator("tr.seats-row").filter({has: page.locator(".seat-row-no-area", {hasText:"D"})})
//    await rowD.locator("td.seats-col").filter({hasText:"3"}).click()

})