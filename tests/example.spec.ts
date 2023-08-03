import { test, expect, chromium } from '@playwright/test';

  test('Testboutique', async () => {
    test.setTimeout(90000);
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
  

  await page.goto('https://testboutique-precisiontest.deno.dev/static/shop/');
  await page.click('text = here')

  //Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("PrecisionTestPro products and information");

  //Expect TechSure Multimeter
  await page.click('#products > div:nth-child(1) > div:nth-child(5) > a:nth-child(2)');
  await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Multimeter");
});

  //Expect 
// test('get started link', async ({ page }) => {
//   await page.goto('https://testboutique-precisiontest.deno.dev/static/shop/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
