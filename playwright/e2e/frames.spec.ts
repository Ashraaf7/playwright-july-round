import { test } from '@playwright/test';

test('Simple Frame TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/frames-windows/frames.html');
    await page.frameLocator().getByPlaceholder('Enter email').fill('test@example.com');
});

test('Nested Frame TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/frames-windows/frames.html');
    await page.frameLocator().getByPlaceholder('Inner input').fill('test@example.com');

    //frame()
    await page.frame({ url: 'https://aa-practice-test-automation.vercel.app/Pages/frames-windows/simple-frame.html' })?.name();

    // List all frames() on the page
    const frames = await page.frames();
    for (const frame of frames) {
        console.log(frame.url());
    }

    //contentFrame() of the Ahmed Frame
    const ahmedFrame = await page.getByLabel('Ahmed Frame');
    ahmedFrame.contentFrame();

    //frameElement() of the Simple Frame
    const frameElement = await page.frame({ url: 'https://aa-practice-test-automation.vercel.app/Pages/frames-windows/simple-frame.html' })?.frameElement();
    console.log(await frameElement?.getAttribute('src'));
});