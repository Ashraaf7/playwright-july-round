import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {


    //Locators for the home page elements
    private readonly productComponent: Locator;
    private readonly addToCartButton: Locator;

    //Variables for the home page elements
    private readonly page: Page;


    //Constructor for the home page class
    constructor(page: Page) {
        this.page = page;
        this.productComponent = page.locator('.details');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    }

    //Actions for the home page elements
    async addToCart(productName: string) {
        const product = this.productComponent.filter({ hasText: productName });
        await product.locator(this.addToCartButton).click();
    }

    //Assertions for the home page elements
    async expectProductInCart(productsNumber: string) {
        const cartIcon = this.page.locator(`(//li /a[@class='ico-cart'] /span)[2]`);
        await expect(cartIcon).toHaveText(`(${productsNumber})`);
    }

}