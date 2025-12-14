import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { EIRCPage } from '../POM/EIRCPage';

test('login and verify EIRC page title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const eircPage = new EIRCPage(page);

  await page.goto('https://risk-calculator-qa-assignment.lovable.app/login');

  await loginPage.login('testuser@example.com', 'testpassword');

  await expect(eircPage.title).toContainText('Environmental Impact Risk Calculator');
});