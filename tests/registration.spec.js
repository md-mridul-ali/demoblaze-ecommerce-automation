import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('#signin2').click();
  await page.locator('#sign-username').fill('cucumber');
  await page.locator('#sign-password').fill('cucumber@123');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('dialog', { name: 'Sign up' }).getByLabel('Close').click();

  await page.waitForTimeout(2000);

});