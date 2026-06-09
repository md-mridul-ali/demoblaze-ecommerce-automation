
const { test, expect } = require('@playwright/test');

test('Cart and Checkout Automation', async({ page }) => {

  // Open website
  await page.goto('https://www.demoblaze.com/index.html');
  await page.waitForTimeout(2000);

  await page.click('text="Samsung galaxy s6"');

  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.click('text="Add to cart"');
  await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'addToCart.png'})
  await page.waitForTimeout(2000);

  await page.click('#cartur');
  await expect(await page.locator('#tbodyid')).toContainText('Samsung galaxy s6')

  await page.click('button:has-text("Place Order")');

  await page.fill('#name', 'Mridul Islam');
  await page.fill('#country', 'Bangladesh');
  await page.fill('#city', 'Dhaka');
  await page.fill('#card', '123456789');
  await page.fill('#month', '06');
  await page.fill('#year', '2026');
  await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'FillCheckout.png'})
 
  await page.click('button:has-text("Purchase")');

  await expect(page.locator('.sweet-alert')).toContainText('Thank you for your purchase!');
  await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'paymentDone.png'})
    
  await page.click('button.confirm');

  await page.waitForTimeout(3000);

});