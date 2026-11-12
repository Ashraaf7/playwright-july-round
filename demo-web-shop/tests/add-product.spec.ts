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

test('Add product to cart', async ({ page }) => {
    // Add product to cart
    await homePage.addToCart(products.productName);

    // Verify product in cart
    await homePage.expectProductInCart('1');
});

test.afterEach(async ({ page }) => {
    // Clear the cart and validate it is empty
    await cartPage.navigateTo();
    await cartPage.clearCart();
    await cartPage.validateCartToBeEmpty();
}); 
