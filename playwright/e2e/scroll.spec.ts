import { test } from '@playwright/test';

test('scroll TC', async ({ context, page }) => {
    context.addCookies([{
        name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html');
    await page.locator('.assertion-section').evaluate((section) => {
        section.scrollIntoView();
    });
});


test('scroll with playwright TC', async ({ context, page }) => {
    context.addCookies([{
        name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/scrolling.html');
    await page.getByRole('button', { name: 'Choose a state' }).click();
    await page.getByText('Mississippi').scrollIntoViewIfNeeded();
    await page.getByText('Nevada').click();
});