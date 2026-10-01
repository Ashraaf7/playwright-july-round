import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aa-practice-test-automation.vercel.app/');
  await page.getByTestId('username-input').fill('admin');
  await page.getByTestId('username-input').press('Tab');
  await page.getByTestId('password-input').fill('admin');
  await page.getByTestId('login-button').click();
  await expect(page.locator('[data-testid="dashboard-title"]')).toContainText('Practice Modules');
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});