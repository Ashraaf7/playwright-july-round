import { test, chromium } from '@playwright/test';
import { PageManager } from '../pages/page-manager.ts';
import homeData from '../test-data/home-data.ts';
import loginData from '../test-data/login-data.json';
import { CsvReader } from '../utils/csvReader.ts';

let pageManager: PageManager;

test.beforeAll(async ({ }) => {
    test.setTimeout(90000); // Set a higher timeout for the beforeAll hook
    console.log('Starting the test suite');
});

test.beforeEach(async ({ page }, testInfo) => {
    // const browser = await chromium.launch(); //os browser process
    // const context = await browser.newContext(); //new incognito context
    // const page = await context.newPage();
    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 30_000);
    //1. preparing test data and navigating to the home page
    const csv = new CsvReader();
    await csv.loadFile('../test-data/login-data.csv');
    pageManager = new PageManager(page);
    await pageManager.getLoginPage().navigateToLoginPage();
    //  await pageManager.getLoginPage().login(loginData.validCase.username, loginData.validCase.password);
    await pageManager.getLoginPage().login(csv.getDataByRowAndColumn(0, 'username')!, csv.getDataByRowAndColumn(0, 'password')!);
    //  await pageManager.getLoginPage().login(homeData.loginData.username, homeData.loginData.password);
    //await page.close();
});

test('Verify that the home page is accessible after login', {
    annotation: {
        type: 'story',
        description: 'AH-250'
    }
}, async ({ page }) => {
    await pageManager.getHomePage().verifyUserIsOnHomePage();
});


test('Verify that the user can logout from the home page', {
    annotation: {
        type: 'story',
        description: 'AH-250'
    }
}, async ({ page }) => {
    await pageManager.getHomePage().clickLogoutButton();
    await pageManager.getLoginPage().verifyUserIsOnLoginPage();
});



test.afterEach(async ({ page }) => {
    console.log('Test completed');
});

test.afterAll(async ({ }) => {
    test.setTimeout(90000); // Set a higher timeout for all tests in this suite
    console.log('All tests completed');
});