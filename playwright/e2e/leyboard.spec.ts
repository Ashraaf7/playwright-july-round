import { test } from '@playwright/test';


test('keyboard TC', async ({ page }) => {
    await page.goto('https://www.toptal.com/developers/keycode');
    await page.keyboard.press('A')
});