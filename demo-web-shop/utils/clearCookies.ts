import { type Page } from '@playwright/test';

export async function clearCookies(page: Page) {
    await page.context().clearCookies();
    await page.reload();
}