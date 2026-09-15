import { test, type Page } from '@playwright/test';


test('Date Picker TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/datePicker.html');
    await page.locator('#basicDate').fill('2026-09-15');
});

test('Date Picker custom TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/datePicker.html');
    await selectDate(page, '5');
});



async function selectDate(page: Page, day: string) {
    await page.getByRole('button', { name: 'Open Calendar' }).click(); // Open the calendar to select a date
    await page.getByRole('button', { name: '<' }).click(); // Navigate to the previous month if needed (Dec 2023)
    await page.getByRole('button', { name: day, exact: true }).click(); // Select the desired day
}

async function selectDate2(page: Page, year: string, month: string, day: string) {

}