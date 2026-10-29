import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import loginData from '../test-data/login-data.json';


let loginPage: LoginPage;
test.use({ baseURL: undefined })
test('color scheme', async ({ page }) => {
    await page.goto('https://playwright.dev/')
});

test('geolocation', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/geolocation')
    await page.getByRole('button').click()
});


test('language', async ({ page }) => {
    await page.goto('https://www.amazon.eg/')
});


test('timezone', async ({ page }) => {
    await page.goto('https://worldtimes.ai/')
});

test('accept download', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download')
    await page.getByRole('link', { name: 'Images.txt' }).click()
});

test('User can login with valid credentials', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(loginData.validCase.username, loginData.validCase.password);
    await loginPage.verifyUserIsLoggedIn();
});

test('authentication prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/basic_auth')
});

test('CSP', async ({ page }) => {
    await page.goto('https://b.compass-demo.com/csp_playground/');
    await page.locator('#cspInput').fill('default-src \'self\'; script-src \'self\'');
    await page.locator('[formaction="/csp_playground/setCsp"]').click()
    await page.addScriptTag({
        content: 'document.body.dataset.demo = "test"',
    })
});