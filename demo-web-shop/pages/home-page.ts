import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {


    //Locators for the home page elements
    private readonly productComponent: Locator;
    private readonly addToCartButton: Locator;
    private readonly logoutLink: Locator;
    private readonly loginLink: Locator;

    //Variables for the home page elements
    private readonly page: Page;


    //Constructor for the home page class
    constructor(page: Page) {
        this.page = page;
        this.productComponent = page.locator('.details');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
        this.loginLink = page.getByRole('link', { name: 'Log in' });

    }

    //Actions for the home page elements

    async navigateTo() {
        await this.page.goto('/');
    }
    async addToCart(productName: string) {
        const product = this.productComponent.filter({ hasText: productName });
        await product.locator(this.addToCartButton).click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    //Assertions for the home page elements
    async expectUserLoggedOut() {
        await expect(this.loginLink).toBeVisible();
    }

    async expectProductInCart(productsNumber: string) {
        const cartIcon = this.page.locator(`(//li /a[@class='ico-cart'] /span)[2]`);
        const loader = this.page.locator('.loading-image');
        await expect(loader).toBeHidden();
        await expect(cartIcon).toHaveText(`(${productsNumber})`);
    }

}