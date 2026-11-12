import { type Page, type Locator, expect } from '@playwright/test';

enum gender {
    Male,
    Female
}

export class RegisterPage {

    //Locators for the registration page elements
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    private readonly registerButton: Locator;
    private readonly registerationMessageLocator: Locator;


    //Variables for the registration page elements
    private readonly page: Page;
    private readonly url = '/register';
    private readonly registrationMessage = 'Your registration completed';

    //Constructor for the registration page class
    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.registerationMessageLocator = page.locator('div.result');
    }


    //Actions for the registration page elements
    async navigateTo() {
        await this.page.goto(this.url);
    }

    async register(gender: gender, firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
        const genderRadio = this.page.getByRole('radio', { name: gender.toString() });
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.registerButton.click();
    }


    //Assertions for the registration page elements
    async expectRegistrationMessage() {
        await expect(this.registerationMessageLocator).toHaveText(this.registrationMessage);
    }


}