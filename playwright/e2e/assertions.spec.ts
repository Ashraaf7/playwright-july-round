import { test, expect } from '@playwright/test';

test('verify that the user is logged in', async ({ page }) => {
    // Add your test steps and assertions here
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Assert that the user is logged in
    await expect(page.getByRole('button', { name: 'Logout' })).toHaveCount(1);
    await expect(page.getByRole('button', { name: 'Logout' })).toBeHidden();
    //await expect(page).toHaveURL('https://aa-practice-test-automation.vercel.app/Pages/main.html');
});


test('auto-retry test', async ({ context, page }) => {
    const cookie = {
        name: 'deeplinkEnabled',
        value: 'true',
        url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }
    context.addCookies([cookie])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')
    const downloadCVButton = page.locator('[data-testid="download-cv-btn-1"]');
    await downloadCVButton.click();
    await expect(downloadCVButton).toHaveAttribute('value', 'Downloaded!', { timeout: 10000 });
});


test('non-retry test', async ({ context, page }) => {
    const cookie = {
        name: 'deeplinkEnabled',
        value: 'true',
        url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }
    context.addCookies([cookie])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')
    const downloadCVButton = page.locator('[data-testid="download-cv-btn-1"]');
    await downloadCVButton.click();
    const value = await downloadCVButton.getAttribute('value');
    expect(value).toBe('Downloaded!');
});

test('to poll assertion', async ({ context, page }) => {
    const cookie = {
        name: 'deeplinkEnabled',
        value: 'true',
        url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }
    context.addCookies([cookie])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')
    const downloadCVButton = page.locator('[data-testid="download-cv-btn-1"]');
    await downloadCVButton.click();
    await expect.poll(async () => {
        const value = await downloadCVButton.getAttribute('value');
        return value;
    }, { timeout: 10000 }).toBe('Downloaded!');
});


test('to pass assertion', async ({ context, page }) => {
    const cookie = {
        name: 'deeplinkEnabled',
        value: 'true',
        url: 'https://aa-practice-test-automation.vercel.app/Pages/main.html'
    }
    context.addCookies([cookie])
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')
    const downloadCVButton = page.locator('[data-testid="download-cv-btn-1"]');
    await downloadCVButton.click();
    await expect(async () => {
        const value = await downloadCVButton.getAttribute('value');
        expect(value).toBe('Downloaded!');
        expect(value).not.toBe('Downloaded CV'); // Ensure the value is 'Downloaded!' before passing the assertion
    }).toPass({ timeout: 10000 });
});


test('expect any', async ({ context, page }) => {
    const user = {
        id: '1',
        name: 'Ahmed'
    }
    expect(user).toEqual({
        id: expect.any(Number),
        name: 'Ahmed'
    });

});


//anything > to match any type except null or undefined
test('expect anything', async ({ context, page }) => {
    const user = {
        id: null,
        name: 'Ahmed'
    }
    expect(user).toEqual({
        id: expect.anything(),
        name: 'Ahmed'
    });

});

test('expect object containing', async ({ context, page }) => {
    const user = {
        id: 123,
        name: 'Ahmed',
        email: 'ahmed@example.com',
        role: 'admin'
    }
    expect(user).toEqual(
        expect.objectContaining({
            email: 'ahmed@example.com',
            role: 'admin'
        })
    );

});


test('hard assertion', async ({ page }) => {
    // Add your test steps and assertions here
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Assert that the user is logged in
    await expect(page.getByRole('heading')).toHaveText('Ahmed');//failed
    console.log('Assertion for heading text completed');
    await expect(page).toHaveURL('https://aa-practice-test-automation.vercel.app/Pages/main.html');
});

test('soft assertion', async ({ page }) => {
    // Add your test steps and assertions here
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Assert that the user is logged in
    await expect.soft(page.getByRole('heading'), 'Heading text should be Ahmed').toHaveText('Ahmed');//failed
    console.log('Assertion for heading text completed');
    await expect.soft(page, 'URL should be the Ahmed page').toHaveURL('https://aa-practice-test-automation.vercel.app/Pages/ahmed.html');
});


test('custom assertion', async ({ page }) => {
    // Add your test steps and assertions here
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Assert that the user is logged in
    const customAssertion = expect.configure({
        timeout: 10000,
        soft: true,
        message: 'Custom assertion failed'
    })
    await customAssertion(page.getByRole('heading'), 'Heading text should be Ahmed').toHaveText('Ahmed');//failed
    console.log('Assertion for heading text completed');
    await customAssertion(page, 'URL should be the Ahmed page').toHaveURL('https://aa-practice-test-automation.vercel.app/Pages/ahmed.html');
});
