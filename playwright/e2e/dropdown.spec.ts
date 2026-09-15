import { test } from '@playwright/test';


test('Dropdown TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.getByRole('combobox', { name: 'Years of Experience' }).selectOption({ label: '0-1 Years' });
    // await page.getByRole('combobox', { name: 'Years of Experience' }).selectOption({ value: '0-1' });
    // await page.getByRole('combobox', { name: 'Years of Experience' }).selectOption({ index: 1 });
});

test('Dropdown multiple TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/dropDown.html');
    await page.getByRole('listbox', { name: 'Select Skills' }).selectOption(['Selenium', 'Playwright', 'Appium']);
});



