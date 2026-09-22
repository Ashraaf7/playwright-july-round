import { test } from '@playwright/test';

test('cookies TC', async ({ context, page }) => {
    const cookie = {
        name: 'deeplinkEnabled',
        value: 'true',
        url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }
    context.addCookies([cookie])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/basic-actions/checkbox_Radio.html')
});