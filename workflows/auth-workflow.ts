import { LoginPage } from '../POM/LoginPage';
import { EIRCPage } from '../POM/EIRCPage';
import { expect } from '@playwright/test';

export class AuthWorkflow {
    constructor(
        private readonly loginPage: LoginPage,
        private readonly eircPage: EIRCPage
    ) { }

    async loginAndAssertSuccess(username: string, password: string) {
        await this.loginPage.login(username, password);

        await expect(this.eircPage.title)
            .toHaveText('Environmental Impact Risk Calculator');

        await expect(this.eircPage.subtitle)
            .toContainText('Assess the environmental impact risk');
    }
}
