import { test } from '@playwright/test';


test('tabs TC', async ({ context, page }) => {
    const aaPage = page;
    await aaPage.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const linkedinPage = context.waitForEvent('page');
    await aaPage.getByRole('link', { name: 'Ahmed Ashraf' }).click();


    console.log(await (await linkedinPage).title());
    console.log(await aaPage.title());
});


test('tabs2 TC', async ({ context, page }) => {
    const aaPage = page;
    await aaPage.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const newTab = await context.newPage();
    await newTab.goto('https://www.google.com');
    await aaPage.bringToFront();
});