import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { EIRCPage } from '../POM/EIRCPage';
import { AuthWorkflow } from '../workflows/auth-workflow';
import loginData from '../test-data/loginData.json';

const test = base.extend<{
  loginPage: LoginPage,
  eircPage: EIRCPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  eircPage: async ({ page }, use) => {
    const eircPage = new EIRCPage(page);
    await use(eircPage);
  },
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://risk-calculator-qa-assignment.lovable.app/login');
})

test.describe('Sign in with any combination of credentials.', () => {
  loginData.forEach(({ username, password }) => {
    test('User can login with username: ' + username + 'and password: ' + password, async ({ loginPage, eircPage }) => {
      await loginPage.login(username, password);
      await expect(eircPage.title).toContainText('Environmental Impact Risk Calculator');
      await expect(eircPage.subtitle).toContainText('Assess the environmental impact risk of power plant operations based on emissions, proximity to protected areas, and waste management practices.');
    });
  });
});

test.describe('Extra tests', () => {
  test('User can login by pressing the ENTER key.', async ({ page, loginPage, eircPage }) => {
    await loginPage.enterUsername(loginData[5].username);
    await loginPage.passwordInput.fill(loginData[5].password);
    await page.keyboard.press('Enter');
    await expect(eircPage.title).toContainText('Environmental Impact Risk Calculator');
    await expect(eircPage.subtitle).toContainText('Assess the environmental impact risk of power plant operations based on emissions, proximity to protected areas, and waste management practices.');

  });

  test('User stays logged in after page refresh.', async ({ page, loginPage, eircPage }) => {
    const auth = new AuthWorkflow(loginPage, eircPage);
    await auth.loginAndAssertSuccess(loginData[5].username, loginData[5].password);
    await page.reload();
    await expect(eircPage.title).toContainText('Environmental Impact Risk Calculator');
    await expect(eircPage.subtitle).toContainText('Assess the environmental impact risk of power plant operations based on emissions, proximity to protected areas, and waste management practices.');
  });

  test('User is logged out after clicking on log out button.', async ({ loginPage, eircPage }) => {
    const auth = new AuthWorkflow(loginPage, eircPage);
    await auth.loginAndAssertSuccess(loginData[5].username, loginData[5].password);
    await eircPage.signOutBtn.click();
    await expect(loginPage.signInButton).toBeVisible();
  });
});