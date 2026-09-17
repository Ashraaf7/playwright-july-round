import { test } from '@playwright/test';
import path from 'node:path';

test('Upload Files TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    await page.locator('#regularFileInput').setInputFiles(path.join(__dirname, '../test-data/test.txt'))
    await page.pause();
    await page.locator('#regularFileInput').setInputFiles([]); //clear 
});

test('Upload multiple Files TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    await page.locator('#regularFileInput').setInputFiles([
        path.join(__dirname, '../test-data/test.txt'),
        path.join(__dirname, '../test-data/test2.txt'),
    ]);
});



test('Upload Files dynamically TC', async ({ page }) => {
    const fileChooserPomise = page.waitForEvent('filechooser');
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    await page.locator('#chooseFileBtn').click();
    const fileChooser = await fileChooserPomise;
    await fileChooser.setFiles(path.join(__dirname, '../test-data/test.txt'));
});


test('Upload Files page.on TC', async ({ page }) => {
    page.on('filechooser', async (fileChooser) => {
        await fileChooser.setFiles(path.join(__dirname, '../test-data/test.txt'));
    });
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    await page.locator('#chooseFileBtn').click();
});
