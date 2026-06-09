
const { test, expect } = require('@playwright/test');

test('Remove Cart',async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Add product first
    await page.click('text="Samsung galaxy s6"');
    await page.click('text="Add to cart"');
    
    await page.click('#cartur');

    await page.waitForTimeout(2000);
    await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'BeforeDelete.png'});
    await page.click('text="Delete"');
   
    await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'AfterClickDelete.png'});

    await expect(await page.locator('#tbodyid')).not.toContainText('Samsung galaxy s6')
    await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'AfterDoneDelete.png'});
    await page.waitForTimeout(2000)
});

