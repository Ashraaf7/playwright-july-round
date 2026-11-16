import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';
import loginData from '../../test-data/loginData.json';
import products from '../../test-data/products.json';

let loginPage: LoginPage;
let homePage: HomePage;
setup('global setup for login and adding product to cart', async ({ page }) => {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    //Login steps
    await loginPage.navigateTo();
    await loginPage.login(loginData.email, loginData.password);

    //Adding product to cart 
    await homePage.addToCart(products.productName);
    await homePage.expectProductInCart('1');

});