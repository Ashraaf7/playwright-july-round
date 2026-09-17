import { test, chromium } from '@playwright/test';
import { handleDialog } from './alerts.spec';


test('Drag and Drop TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/dragDrop.html');
    const src = page.locator('#kanban-card-1');
    const dest = page.locator('#kanban-inprogress');
    await src.dragTo(dest);
});


test('Drag and Drop custom TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('admin')
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/mouse-keyboard/dragDrop.html');
    const src = page.locator('#kanban-card-1');
    const dest = page.locator('#kanban-inprogress');
    await src.hover(); // 1.hover over the source element before dragging
    await page.mouse.down(); // 2.mouse down
    await dest.hover(); // 3.hover over the destination element
    await page.mouse.up(); // 4.mouse up to drop the element
});