import { test, chromium } from '@playwright/test';


test('navigation to playwright.dev without fixtures', async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await browser.close();
});

test('navigation to playwright.dev with fixtures', async ({ page }) => {
    const response = await page.goto('https://playwright.dev/', { referer: 'https://www.google.com' });
    console.log('Response status:', response?.status());
});

test('go back test case', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.goto('https://www.facebook.com');
    await page.goBack();
});


test('forward back test case', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.goto('https://www.facebook.com');
    await page.goBack();
    await page.goForward();
});

test('reload test case', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.reload();
});

test('reload after navigation test case', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.goto('https://www.facebook.com');
    await page.reload();
});



