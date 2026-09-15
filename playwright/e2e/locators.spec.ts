import { test, expect, selectors } from '@playwright/test';


test('by role', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('Test');
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test');
    await page.getByRole('button', { name: 'sign in to ' }).click(); //sub-string case-insensitive match
});

test('by label', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByLabel('user').fill('Test');
    await page.getByLabel('Password').fill('Test');
    await page.getByRole('button', { name: 'sign in to ' }).click(); //sub-string case-insensitive match
});

test('by placeholder', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('Test');
    await page.getByPlaceholder('enter your password').fill('Test');
    await page.getByRole('button', { name: 'sign in to ' }).click(); //sub-string case-insensitive match
});

test('by text', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('Test');
    await page.getByPlaceholder('enter your password').fill('Test');
    await page.getByText('Sign In', { exact: true }).click(); //sub-string case-insensitive match
});


test('by alt text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByAltText('Fork me').click(); //example of using alt text
});

test('by title', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByTitle('za3bola').click();
});

test('by test id', async ({ page }) => {
    //selectors.setTestIdAttribute('automation-id');
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByTestId('username-input').fill('Test');
    await page.getByTestId('password-input').fill('Test');
    await page.getByTestId('login-button').click(); //sub-string case-insensitive match
});

test('by xpath and css', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.locator('//input[@type="text"]').fill('admin') // using xpath
    await page.locator('#inputPassword').fill('admin'); // using css selector
    await page.locator('//button').click(); // using xpath for button
});


