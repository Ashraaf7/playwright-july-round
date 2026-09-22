import { test } from '@playwright/test';
test('slider TC', async ({ context, page }) => {
    context.addCookies([{
        name: 'deeplinkEnabled', value: 'true', url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/slider.html');
    await page.getByRole('slider', { name: 'Volume' }).evaluate((slider) => {
        slider.setAttribute('value', '90')
    });
});


