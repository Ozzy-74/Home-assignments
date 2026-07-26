import { test } from "@playwright/test";

test("learn locating strategy using CSS selector", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("demosalesmanager");
    await page.locator(".inputLogin").nth(1).fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator(".crmsfa").click();
    
});