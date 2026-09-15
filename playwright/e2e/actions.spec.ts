import { test } from '@playwright/test';

test('Blur TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).blur();
});

test('Focus TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'password' }).focus({ timeout: 5000 });
});


test('Check and Uncheck TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'password' }).focus({ timeout: 5000 });
    await page.getByRole('checkbox', { name: 'Remember me' }).check({ trial: true });
});

test('Radio TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/basic-actions/checkbox_Radio.html');
    await page.getByRole('radio', { name: 'High School' }).check();
});

test('Fill TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
});

test('Press Sequentially TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).pressSequentially('Ahmed', { delay: 500 })
});

test('Press TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'user' }).press('Control+a')
});

test('Click TC', async ({ page }) => { //30 
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('checkbox', { name: 'Remember me' }).click({ button: 'left', steps: 3 })

});

test('Click TC 2', async ({ page }) => { //30 
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('img', { name: 'Fork me' }).click({ button: 'left', modifiers: ['Control'] })
});

test('Right Click TC', async ({ page }) => { //30 
    page.once('dialog', async dialog => { console.log(await dialog.message()); });
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    await page.locator('#hot-spot').click({ button: 'right' })
});

test('Hover TC', async ({ page }) => { //30 
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.getByRole('img', { name: 'User Avatar' }).first().hover()
});