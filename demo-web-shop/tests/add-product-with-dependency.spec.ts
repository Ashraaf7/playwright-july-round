import { test } from '@playwright/test';
import { clearCookies } from '../utils/clearCookies';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import loginData from '../test-data/loginData.json';
import products from '../test-data/products.json';
import { CartPage } from '../pages/cart-page';

let loginPage: LoginPage;
let homePage: HomePage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    // Perform login
    await loginPage.navigateTo();
    await loginPage.login(loginData.email, loginData.password);
});

test('verify that item is added to cart', async ({ page }) => {
    // Verify product in cart
    await homePage.expectProductInCart('1');
});
