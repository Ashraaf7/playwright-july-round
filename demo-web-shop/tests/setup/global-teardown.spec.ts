import { test as teardown } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';
import loginData from '../../test-data/loginData.json';
import products from '../../test-data/products.json';
import { CartPage } from '../../pages/cart-page';

let loginPage: LoginPage;
let homePage: HomePage;
let cartPage: CartPage;

teardown('global teardown for clearing cart', async ({ page }) => {

    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);

    //Login steps
    await loginPage.navigateTo();
    await loginPage.login(loginData.email, loginData.password);

    //Clearing cart 
    await cartPage.navigateTo();
    await cartPage.clearCart();
    await cartPage.validateCartToBeEmpty();

});