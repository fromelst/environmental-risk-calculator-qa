import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { EIRCPage } from '../POM/EIRCPage';
import { AuthWorkflow } from '../workflows/auth-workflow.ts';
import loginData from '../data/loginData.json';
import { factorData } from '../Data/factorData';
import { percentageUtils } from '../utils/percentageUtils';

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

test.beforeEach(async ({ page, loginPage, eircPage }) => {
  await page.goto('https://risk-calculator-qa-assignment.lovable.app/login');
  const auth = new AuthWorkflow(loginPage, eircPage);
  await auth.loginAndAssertSuccess(loginData[5].username, loginData[5].password);
});

test.describe('UI Checks', () => {
  test('factor weight values check', async ({ eircPage }) => {
    await expect.soft(eircPage.emissionsFactorLegend).toHaveText(factorData.emissions.title);
    await expect.soft(eircPage.emissionsWeightLegend).toHaveText(factorData.emissions.weight.toString());
    await expect.soft(eircPage.proximityFactorLegend).toHaveText(factorData.proximity.title);
    await expect.soft(eircPage.proximityWeightLegend).toHaveText(factorData.proximity.weight.toString());
    await expect.soft(eircPage.wasteManagementFactorLegend).toHaveText(factorData.wasteManagement.title);
    await expect.soft(eircPage.wasteManagementWeightLegend).toHaveText(factorData.wasteManagement.weight.toString());
    //emissionsWeightRiskBreakdown
  });
  test('test UI elements of Emissions factor', async ({ eircPage }) => {
    await expect.soft(eircPage.emissionsTitle).toHaveText(factorData.emissions.title);
    await expect.soft(eircPage.emissionsSubtitle).toHaveText(factorData.emissions.subtitle);
    await expect.soft(eircPage.emissionsLowText).toHaveText(factorData.emissions.levels.low.text);
    await expect.soft(eircPage.emissionsLowSubtext).toHaveText(factorData.emissions.levels.low.subtext);
    await expect.soft(eircPage.emissionsMediumText).toHaveText(factorData.emissions.levels.medium.text);
    await expect.soft(eircPage.emissionsMediumSubtext).toHaveText(factorData.emissions.levels.medium.subtext);
    await expect.soft(eircPage.emissionsHighText).toHaveText(factorData.emissions.levels.high.text);
    await expect.soft(eircPage.emissionsHighSubtext).toHaveText(factorData.emissions.levels.high.subtext);
    //proximityWeightRiskBreakdown
  });
  test('test UI elements of Proximity factor', async ({ eircPage }) => {
    await expect.soft(eircPage.proximityTitle).toHaveText(factorData.proximity.title);
    await expect.soft(eircPage.proximitySubtitle).toHaveText(factorData.proximity.subtitle);
    await expect.soft(eircPage.proximityLowText).toHaveText(factorData.proximity.levels.low.text);
    await expect.soft(eircPage.proximityLowSubtext).toHaveText(factorData.proximity.levels.low.subtext);
    await expect.soft(eircPage.proximityMediumText).toHaveText(factorData.proximity.levels.medium.text);
    await expect.soft(eircPage.proximityMediumSubtext).toHaveText(factorData.proximity.levels.medium.subtext);
    await expect.soft(eircPage.proximityHighText).toHaveText(factorData.proximity.levels.high.text);
    await expect.soft(eircPage.proximityHighSubtext).toHaveText(factorData.proximity.levels.high.subtext);
  });
  test('test UI elements of Waste Management factor', async ({ eircPage }) => {
    await expect.soft(eircPage.wasteManagementTitle).toHaveText(factorData.wasteManagement.title);
    await expect.soft(eircPage.wasteManagementSubtitle).toHaveText(factorData.wasteManagement.subtitle);

    await expect.soft(eircPage.recyclingTitle).toHaveText(factorData.recycling.title);
    await expect.soft(eircPage.recyclingSubtitle).toHaveText(factorData.recycling.subtitle);
    await expect.soft(eircPage.recyclingHighText).toHaveText(factorData.recycling.levels.high.text);
    await expect.soft(eircPage.recyclingHighSubtext).toHaveText(factorData.recycling.levels.high.subtext);
    await expect.soft(eircPage.recyclingMediumText).toHaveText(factorData.recycling.levels.medium.text);
    await expect.soft(eircPage.recyclingMediumSubtext).toHaveText(factorData.recycling.levels.medium.subtext);
    await expect.soft(eircPage.recyclingLowText).toHaveText(factorData.recycling.levels.low.text);
    await expect.soft(eircPage.recyclingLowSubtext).toHaveText(factorData.recycling.levels.low.subtext);
    //recyclingWeightRiskBreakdown

    await expect.soft(eircPage.hazardousHandlingTitle).toHaveText(factorData.hazardousHandling.title);
    await expect.soft(eircPage.hazardousHandlingSubtitle).toHaveText(factorData.hazardousHandling.subtitle);
    await expect.soft(eircPage.hazardousHandlingNoBtnText).toHaveText(factorData.hazardousHandling.options.no.text);
    await expect.soft(eircPage.hazardousHandlingNoBtnSubtext).toHaveText(factorData.hazardousHandling.options.no.subtext);
    await expect.soft(eircPage.hazardousHandlingYesBtnText).toHaveText(factorData.hazardousHandling.options.yes.text);
    await expect.soft(eircPage.hazardousHandlingYesBtnSubtext).toHaveText(factorData.hazardousHandling.options.yes.subtext);
    //hazardousHandlingWeightRiskBreakdown
  });
});

test.describe('Calculator Check', () => {
  test('Emissions', async ({ eircPage }) => {
    await eircPage.setEverythingLowRisk();

    let emissionCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.emissions.levels.low.value, factorData.emissions.weight);
    await expect.soft(eircPage.emissionsEnvironmentalRiskPercentage).toHaveText("→ " + emissionCalculatedWeight + " of total");
    await expect.soft(eircPage.emissionsPercentage).toHaveText(factorData.emissions.levels.low.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(emissionCalculatedWeight);

    await eircPage.emissionsMediumText.click();
    emissionCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.emissions.levels.medium.value, factorData.emissions.weight);
    await expect.soft(eircPage.emissionsEnvironmentalRiskPercentage).toHaveText("→ " + emissionCalculatedWeight + " of total");
    await expect.soft(eircPage.emissionsPercentage).toHaveText(factorData.emissions.levels.medium.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(emissionCalculatedWeight);

    await eircPage.emissionsHighText.click();
    emissionCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.emissions.levels.high.value, factorData.emissions.weight);
    await expect.soft(eircPage.emissionsEnvironmentalRiskPercentage).toHaveText("→ " + emissionCalculatedWeight + " of total");
    await expect.soft(eircPage.emissionsPercentage).toHaveText(factorData.emissions.levels.high.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(emissionCalculatedWeight);

    await eircPage.emissionsLowText.click();
    emissionCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.emissions.levels.low.value, factorData.emissions.weight);
    await expect.soft(eircPage.emissionsEnvironmentalRiskPercentage).toHaveText("→ " + emissionCalculatedWeight + " of total");
    await expect.soft(eircPage.emissionsPercentage).toHaveText(factorData.emissions.levels.low.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(emissionCalculatedWeight);
  });

  test('Proximity to Protected Areas', async ({ eircPage }) => {
    await eircPage.setEverythingLowRisk();
    let proximityCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.proximity.levels.low.value, factorData.proximity.weight);
    await expect.soft(eircPage.proximityEnvironmentalRiskPercentage).toHaveText("→ " + proximityCalculatedWeight + " of total");
    await expect.soft(eircPage.proximityPercentage).toHaveText(factorData.proximity.levels.low.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(proximityCalculatedWeight);

    await eircPage.proximityMediumText.click();
    proximityCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.proximity.levels.medium.value, factorData.proximity.weight);
    await expect.soft(eircPage.proximityEnvironmentalRiskPercentage).toHaveText("→ " + proximityCalculatedWeight + " of total");
    await expect.soft(eircPage.proximityPercentage).toHaveText(factorData.proximity.levels.medium.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(proximityCalculatedWeight);

    await eircPage.proximityHighText.click();
    proximityCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.proximity.levels.high.value, factorData.proximity.weight);
    await expect.soft(eircPage.proximityEnvironmentalRiskPercentage).toHaveText("→ " + proximityCalculatedWeight + " of total");
    await expect.soft(eircPage.proximityPercentage).toHaveText(factorData.proximity.levels.high.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(proximityCalculatedWeight);

    await eircPage.proximityLowText.click();
    proximityCalculatedWeight = percentageUtils.calculateFactorContribution(factorData.proximity.levels.low.value, factorData.proximity.weight);
    await expect.soft(eircPage.proximityEnvironmentalRiskPercentage).toHaveText("→ " + proximityCalculatedWeight + " of total");
    await expect.soft(eircPage.proximityPercentage).toHaveText(factorData.proximity.levels.low.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(proximityCalculatedWeight);
  });

  test('Waste Management - Recycling Efficiency', async ({ eircPage }) => {
    await eircPage.setEverythingLowRisk();
    let wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value));
    await expect.soft(eircPage.recyclingPercentage).toHaveText(factorData.recycling.levels.high.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);

    await eircPage.recyclingMediumText.click();
    wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.medium.value, factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.medium.value, factorData.hazardousHandling.options.no.value));
    await expect.soft(eircPage.recyclingPercentage).toHaveText(factorData.recycling.levels.medium.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);

    await eircPage.recyclingHighText.click();
    wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.low.value, factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.low.value, factorData.hazardousHandling.options.no.value));
    await expect.soft(eircPage.recyclingPercentage).toHaveText(factorData.recycling.levels.low.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);

    await eircPage.recyclingLowText.click();
    wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value));
    await expect.soft(eircPage.recyclingPercentage).toHaveText(factorData.recycling.levels.high.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);

  });

  test('Waste Management - Hazardous Waste Handling', async ({ eircPage }) => {
    await eircPage.setEverythingLowRisk();
    let wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value));
    await expect.soft(eircPage.hazardousHandlingPercentage).toHaveText(factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);

    await eircPage.hazardousHandlingYesBtnText.click();
    wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.yes.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.yes.value));
    await expect.soft(eircPage.hazardousHandlingPercentage).toHaveText(factorData.hazardousHandling.options.yes.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);

    await eircPage.hazardousHandlingNoBtnText.click();
    wasteCalculatedWeight = percentageUtils.calculateFactorContributionWaste(factorData.wasteManagement.weight, factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.wasteManagementEnvironmentalRiskPercentage).toHaveText("→ " + wasteCalculatedWeight + " of total");
    await expect.soft(eircPage.wasteManagementPercentage).toHaveText(percentageUtils.calculateWastePercentage(factorData.recycling.weight, factorData.hazardousHandling.weight, factorData.recycling.levels.high.value, factorData.hazardousHandling.options.no.value));
    await expect.soft(eircPage.hazardousHandlingPercentage).toHaveText(factorData.hazardousHandling.options.no.value);
    await expect.soft(eircPage.totalEnvironmentalRisk).toHaveText(wasteCalculatedWeight);
  });
});

