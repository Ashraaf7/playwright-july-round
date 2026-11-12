import { type Page, type Locator, expect } from '@playwright/test';


export class CartPage {
    //Locators for the cart page elements
    private readonly itemsCheckbox: Locator;
    private readonly updateShoppingCartButton: Locator;
    private readonly emptyCartMessageLocator: Locator;



    //  Variables for the cart page elements
    private readonly page: Page;
    private readonly url: string = '/cart';
    private readonly emptyCartMessage = 'Your Shopping Cart is empty!';



    //Constructor for the cart page class
    constructor(page: Page) {
        this.page = page;
        this.itemsCheckbox = page.locator('input[name="removefromcart"]');
        this.updateShoppingCartButton = page.getByRole('button', { name: 'Update shopping cart' });
        this.emptyCartMessageLocator = page.locator('.order-summary-content');
    }


    //Methods for interacting with the cart page elements
    async navigateTo() {
        await this.page.goto(this.url);
    }

    async clearCart() {
        await this.itemsCheckbox.check();
        await this.updateShoppingCartButton.click();
    }

    //Assert methods for verifying the cart page elements
    async validateCartToBeEmpty() {
        await expect(this.emptyCartMessageLocator).toHaveText(this.emptyCartMessage);
    }


}