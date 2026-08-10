import { expect, test,Mouse } from "@playwright/test";

test("Product purchase", async ({ page }) => {

    await page.goto("https://www.decathlon.in/");

    console.log("Page opened");

    const search = page.locator('//input[@type="search"]');
     await expect(search).toBeVisible();

    console.log("Search count:", await search.count());
   
    await page.waitForTimeout(2000);

    await search.fill("Shoes")
    console.log("Shoes entered");

    await page.locator(`//div[@class = "w-full whitespace-nowrap"]//button`).filter({hasText:"Shoes For Men"}).click()

    await page.waitForLoadState("networkidle");
    
    //console.log(" New Page URL : ", await page.url())

//    const allsports = await page.locator(`//div[@data-test-id="navigation-category-All_Sports"]`).hover()
//    await page.waitForTimeout(2000)
//    await page.getByRole(`link`, {name:"Running", exact:true}).click()

    // locate the sport option and click the one that has text "Running Shoes"
const sports = page.locator(`//span[@data-test-id="title:Sport"]/..`)
await sports.click();
const runningCheckbox = page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]');
await runningCheckbox.click();

  

const gender = page.locator(`//span[@data-test-id="title:Gender"]`)
await gender.click();
const genderCheck = page.locator(`//input[@data-test-id="filter-checkbox-gender_id_en-MEN"]`)
await genderCheck.click();

 await page.waitForLoadState("networkidle");

const size = page.locator(`//span[@data-test-id="title:Size"]`)
await size.click();
const selectSize = page.locator(`//span[@data-test-id="filter-sidebar:item-text"]`).filter({hasText: "Uk 10.5 - eu 45"})
await selectSize.click();

 await page.waitForLoadState("networkidle");

const mostDiscount = await page.locator(`//button[@data-test-id="sort-bar-desktop:dropdown-button"]`).click()
await page.locator(`//span[".flex items-center gap-2"]`).filter({hasText:"Highest discount"}).click();

// 👇 THE FIX: wait for filtered results to finish loading
  // before the slider is touched
 // await page.waitForLoadState("networkidle");

//--slider
// Locate min and max slider handles using XPath
  const minHandle = page.locator('//div[@data-test-id="filter-sidebar-desktop:slider-thumb-min-outer"]');
  const maxHandle = page.locator('//div[@data-test-id="filter-sidebar-desktop:slider-thumb-max-outer"]');

  // Wait for them to be visible
  await minHandle.waitFor();
  await maxHandle.waitFor();

  // Get bounding box of min handle
  const minBox = await minHandle.boundingBox();
  if (!minBox) throw new Error("Min slider handle not found");

  // Drag min handle to the right by 50px
  await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(minBox.x + 15, minBox.y + minBox.height / 2, { steps: 10 });
  
  await page.mouse.up();

//   // Optional: check updated value
//   const newValue = await minHandle.getAttribute("aria-valuenow");
//   console.log("Updated min slider value:", newValue);
//   // Assert that the slider value changed
//  expect(newValue).not.toBeNull();
// //-----

});