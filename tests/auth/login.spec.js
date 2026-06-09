const { test, expect } = require('@playwright/test');
test('login', async({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Green Tea');
    await page.locator('#loginpassword').fill('green@123');

    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close')
    await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'Login.png' })

    await page.waitForTimeout(3000)

    await expect(await page.locator('#nameofuser')).toContainText('Welcome Green Tea');
    await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'Login.png' })

    await page.waitForTimeout(3000);


})

