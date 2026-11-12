import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
    //Locators for the login page elements
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly userLabelLocator: Locator;


    //Variables for the login page elements
    private readonly page: Page;
    private readonly url = '/login';

    //Constructor for the login page class
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.userLabelLocator = page.locator('div.header-links a.account');
    }


    //Actions for the login page elements
    async navigateTo() {
        await this.page.goto(this.url);
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    //Assertions for the login page elements
    async expectUserLabelVisible(email: string) {
        await expect(this.userLabelLocator).toHaveText(email);
    }

}