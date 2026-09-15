import { test, expect, selectors } from '@playwright/test';


test('by role', async ({ page }) => {
    selectors.setTestIdAttribute('data-testid');
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('textbox', { name: 'user' }).fill('Test');
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test');
    await page.getByRole('button', { name: 'sign in to ' }).click(); //sub-string case-insensitive match
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/shadow-dom.html')
    await page.getByTestId('open-input').fill('Test');
});



// <div id="demo">
//     Hello
//     <span style="display:none">Hidden</span>
//     World
// </div>

// Hello World > innerText
// Hello Hidden World > textContent