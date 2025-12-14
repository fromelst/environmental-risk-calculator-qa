import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.usernameInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async enterEmail(email: string) {
        await this.usernameInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignIn();
    }
}