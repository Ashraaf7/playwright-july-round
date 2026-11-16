import { FullConfig, chromium } from "@playwright/test";
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import loginData from '../test-data/loginData.json';
import products from '../test-data/products.json';
import { CartPage } from '../pages/cart-page';


async function globalTeardown(config: FullConfig) {
    const { baseURL, storageState, headless } = config.projects[0].use;

    // Launch browser and create a new page
    const browser = await chromium.launch({ headless });
    const context = await browser.newContext({ baseURL });
    const page = await context.newPage();


    // Perform login and remove product from cart
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigateTo();
    await loginPage.login(loginData.email, loginData.password);

    //remove product from cart
    await cartPage.navigateTo();
    await cartPage.clearCart();
    await cartPage.validateCartToBeEmpty();

    // Save storage state to file
    await context.storageState({ path: storageState as string });

    // Close browser
    await browser.close();

}

export default globalTeardown;