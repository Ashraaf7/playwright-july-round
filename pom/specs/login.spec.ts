import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import loginData from '../test-data/login-data.json';


let loginPage: LoginPage;

//test.use({ baseURL: 'https://prod-automation.vercel.app' });

test.describe('Valid Login Tests', () => {
    test.describe.configure({ retries: 1 })
    test('User can login with valid credentials', async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(loginData.validCase.username, loginData.validCase.password);
        await loginPage.verifyUserIsLoggedIn();
    });
});


test.describe('Invalid Login Tests', () => {

    test.describe.configure({ mode: 'parallel' })
    test('An error is displayed when username is empty', async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(loginData.emptyUsernameCase.username, loginData.emptyUsernameCase.password);
        await loginPage.verifyUsernameEmptyError();
    });

    test('An error is displayed when password is empty', async ({ page }) => {
        test.slow(); //triple timeout for slow tests
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(loginData.emptyPasswordCase.username, loginData.emptyPasswordCase.password);
        await loginPage.verifyPasswordEmptyError();
    });

    test('An error is displayed when invalid credentials are provided', async ({ page }) => {
        test.setTimeout(90000);
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(loginData.invalidPasswordCase.username, loginData.invalidPasswordCase.password);
        await loginPage.verifyInvalidCredentialsErrorMessage();
    });

});


