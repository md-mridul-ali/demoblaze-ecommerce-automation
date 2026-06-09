const { test, expect } = require('@playwright/test');

test('Contact', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.click('//*[@id="navbarExample"]/ul/li[2]/a');
    await page.waitForTimeout(3000);

    await page.fill('#recipient-email', 'mridul@gmail.com')
    await page.waitForTimeout(2000);
    await page.fill('#recipient-name', 'mridul');
    await page.waitForTimeout(2000);
    await page.fill('#message-text', 'Hey, I am SQA Engineer, I want to work with your company');
    await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'wrightMessage.png'});
    await page.waitForTimeout(2000);
    await page.click('//*[@id="exampleModal"]/div/div/div[3]/button[2]');

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Thanks for the message!!')
        await dialog.accept();
    })

    await page.waitForTimeout(3000);


})