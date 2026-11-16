import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { HomePage } from '../../pages/home-page';
import loginData from '../../test-data/loginData.json';
import products from '../../test-data/products.json';
import { CartPage } from '../../pages/cart-page';

type fixures = {
    login: LoginPage;
    home: HomePage;
    cart: CartPage;
}


export const test = base.extend<fixures>({
    login: async ({ page }, use) => {
        //pre conditions
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login(loginData.email, loginData.password);
        await loginPage.expectUserLabelVisible(loginData.email);

        await use(loginPage);

        //post conditions
        const homePage = new HomePage(page);
        await homePage.logout();
        await homePage.expectUserLoggedOut();
    },

    home: async ({ login, page }, use) => {
        //pre conditions
        const homePage = new HomePage(page);
        await homePage.addToCart(products.productName);


        await use(homePage); //test case executuion

        //post conditions (if needed)
        const cartPage = new CartPage(page);
        await cartPage.navigateTo();
        await cartPage.clearCart();
        await cartPage.validateCartToBeEmpty();
    }

});