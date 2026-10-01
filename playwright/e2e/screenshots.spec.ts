import { test, expect } from '@playwright/test';
import path from 'path';


test('Screenshot TC', async ({ context, page }, testInfo) => {
    const cookie = {
        name: 'deeplinkEnabled',
        value: 'true',
        url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }
    context.addCookies([cookie])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')

    const screenshotDir = path.join(__dirname, 'screenshots');// e2e/screenshots

    const element = page.locator('.card').first();

    const noramalScreenshot = await page.screenshot({ path: path.join(screenshotDir, 'normal' + Date.now().toString() + '.png') });
    const fullpageScreenshot = await page.screenshot({ path: path.join(screenshotDir, 'full-page.png'), fullPage: true });
    const elementScreenshot = await element.screenshot({ path: path.join(screenshotDir, 'element.png') });


    testInfo.attach('normal screenshot', { body: noramalScreenshot, contentType: 'image/png' });
    testInfo.attach('full page screenshot', { body: fullpageScreenshot, contentType: 'image/png' });
    testInfo.attach('element screenshot', { body: elementScreenshot, contentType: 'image/png' });

});