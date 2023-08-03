import { test, expect, chromium } from '@playwright/test';

  test('Testboutique', async () => {
    test.setTimeout(90000);
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
  
  //Go to website
  await page.goto('https://testboutique-precisiontest.deno.dev/static/shop/');
  await page.click('text = here')

  //Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("PrecisionTestPro products and information");

  //Expect TechSure Multimeter go to Wiki page
  await page.click('#products > div:nth-child(1) > div:nth-child(5) > a:nth-child(2)');
  await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Multimeter");
  await page.goBack();
  await page.click('text = here')


  //Expect NanoScan Spectrometer has broken link (1 bug)
  await page.click('#products > div:nth-child(2) > div:nth-child(5) > a:nth-child(2)');
  await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Spectrometer");
  
});

  