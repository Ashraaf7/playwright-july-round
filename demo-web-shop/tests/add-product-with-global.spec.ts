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

test('verify that item is added to cart', async ({ page }) => {
    homePage = new HomePage(page);

    // Verify product in cart
    await homePage.navigateTo();
    await homePage.addToCart(products.productName);
    await homePage.expectProductInCart('1');
});
