import { test } from '@playwright/test';

test('page info test case', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = await page.title();
    const url = page.url();
    const pageSrc = await page.content();
    console.log(`Page Title: ${title}` + `\nPage URL: ${url}` + `\nPage Source: ${pageSrc}`);
});