import { Page, Locator } from '@playwright/test';
export class EIRCPage {
    readonly title: Locator;
    readonly subtitle: Locator;
    readonly signOutBtn: Locator;

    readonly emissionsTitle: Locator;
    readonly emissionsSubtitle: Locator;
    readonly emissionsLowBtn: Locator;
    readonly emissionsLowText: Locator;
    readonly emissionsLowSubtext: Locator;

    readonly emissionsMediumBtn: Locator;
    readonly emissionsMediumText: Locator;
    readonly emissionsMediumSubtext: Locator;

    readonly emissionsHighBtn: Locator;
    readonly emissionsHighText: Locator;
    readonly emissionsHighSubtext: Locator;

    readonly proximityTitle: Locator;
    readonly proximitySubtitle: Locator;
    readonly proximityLowBtn: Locator;
    readonly proximityLowText: Locator;
    readonly proximityLowSubtext: Locator;

    readonly proximityMediumBtn: Locator;
    readonly proximityMediumText: Locator;
    readonly proximityMediumSubtext: Locator;

    readonly proximityHighBtn: Locator;
    readonly proximityHighText: Locator;
    readonly proximityHighSubtext: Locator;

    readonly wasteManagementTitle: Locator;
    readonly wasteManagementSubtitle: Locator;

    readonly recyclingTitle: Locator;
    readonly recyclingSubtitle: Locator;
    readonly recyclingLowBtn: Locator;
    readonly recyclingLowText: Locator;
    readonly recyclingLowSubtext: Locator;

    readonly recyclingMediumBtn: Locator;
    readonly recyclingMediumText: Locator;
    readonly recyclingMediumSubtext: Locator;

    readonly recyclingHighBtn: Locator;
    readonly recyclingHighText: Locator;
    readonly recyclingHighSubtext: Locator;

    readonly hazardousHandlingTitle: Locator;
    readonly hazardousHandlingSubtitle: Locator;
    readonly hazardousHandlingNoBtn: Locator;
    readonly hazardousHandlingNoText: Locator;
    readonly hazardousHandlingYesBtn: Locator;
    readonly hazardousHandlingYesText: Locator;

    readonly riskBreakdownSection: Locator;

    constructor(page: Page) {
        this.title = page.locator('h1');
        this.subtitle = page.locator('header > p');
        this.signOutBtn = page.locator('button > svg');
        // Emissions
        this.emissionsTitle = this.getFactorHeader(page, 'emissions', 'h3');
        this.emissionsSubtitle = this.getFactorHeader(page, 'emissions', 'p');
        this.emissionsLowBtn = this.getFactorBtn(page, '#emissions', 'low');
        this.emissionsLowText = this.getFactorBtnText(this.emissionsLowBtn, 1);
        this.emissionsLowSubtext = this.getFactorBtnText(this.emissionsLowBtn, 2);

        this.emissionsMediumBtn = this.getFactorBtn(page, '#emissions', 'medium');
        this.emissionsMediumText = this.getFactorBtnText(this.emissionsMediumBtn, 1);
        this.emissionsMediumSubtext = this.getFactorBtnText(this.emissionsMediumBtn, 2);

        this.emissionsHighBtn = this.getFactorBtn(page, '#emissions', 'high');
        this.emissionsHighText = this.getFactorBtnText(this.emissionsHighBtn, 1);
        this.emissionsHighSubtext = this.getFactorBtnText(this.emissionsHighBtn, 2);

        // Proximity
        this.proximityTitle = this.getFactorHeader(page, 'proximity', 'h3');
        this.proximitySubtitle = this.getFactorHeader(page, 'proximity', 'p');
        this.proximityLowBtn = this.getFactorBtn(page, '#proximity', 'low');
        this.proximityLowText = this.getFactorBtnText(this.proximityLowBtn, 1);
        this.proximityLowSubtext = this.getFactorBtnText(this.proximityLowBtn, 2);

        this.proximityMediumBtn = this.getFactorBtn(page, '#proximity', 'medium');
        this.proximityMediumText = this.getFactorBtnText(this.proximityMediumBtn, 1);
        this.proximityMediumSubtext = this.getFactorBtnText(this.proximityMediumBtn, 2);

        this.proximityHighBtn = this.getFactorBtn(page, '#proximity', 'high');
        this.proximityHighText = this.getFactorBtnText(this.proximityHighBtn, 1);
        this.proximityHighSubtext = this.getFactorBtnText(this.proximityHighBtn, 2);

        // Waste Management
        this.wasteManagementTitle = this.getFactorHeader(page, 'recycling', 'h3');
        this.wasteManagementSubtitle = this.getFactorHeader(page, 'recycling', 'p');

        // Recycling
        this.recyclingTitle = page.locator('//*[@for="recycling"]');
        this.recyclingSubtitle = this.recyclingTitle.locator('..//..//p');
        this.recyclingLowBtn = this.getFactorBtn(page, '#recycling', 'low');
        this.recyclingLowText = this.getFactorBtnText(this.recyclingLowBtn, 1);
        this.recyclingLowSubtext = this.getFactorBtnText(this.recyclingLowBtn, 2);

        this.recyclingMediumBtn = this.getFactorBtn(page, '#recycling', 'medium');
        this.recyclingMediumText = this.getFactorBtnText(this.recyclingMediumBtn, 1);
        this.recyclingMediumSubtext = this.getFactorBtnText(this.recyclingMediumBtn, 2);

        this.recyclingHighBtn = this.getFactorBtn(page, '#recycling', 'high');
        this.recyclingHighText = this.getFactorBtnText(this.recyclingHighBtn, 1);
        this.recyclingHighSubtext = this.getFactorBtnText(this.recyclingHighBtn, 2);

        // Hazardous Waste Handling

        this.hazardousHandlingTitle = page.locator('//*[@for="hazardous"]');
        this.hazardousHandlingSubtitle = this.hazardousHandlingTitle.locator('..//..//p');
        this.hazardousHandlingNoBtn = this.getHazardousBtnTitle(page, '1', '1');
        this.hazardousHandlingNoText = this.getHazardousBtnTitle(page, '1', '2');
        this.hazardousHandlingYesBtn = this.getHazardousBtnTitle(page, '2', '1');
        this.hazardousHandlingYesText = this.getHazardousBtnTitle(page, '2', '2');

        // Total environmetal risk
        this.totalEnvironmentalRisk = page.locator('span.font-mono.font-bold');

        // Risk Breakdown Section
        /*
        this.riskBreakdownSection = page.locator('//h3[text()="Risk Breakdown"]/ancestor::div[1]');
        this.riskBreakDownTitle = this.riskBreakdownSection.locator('./h3');
        this.factorPercentage = page.locator('span.font-mono.font-semibold.text-base');
        this.emissionsPercentage = this.factorPercentage.nth(0);
        this.proximityPercentage = this.factorPercentage.nth(1);
        this.wasteManagementPercentage = this.factorPercentage.nth(2);
        this.recyclingPercentage = page.locator('span.font-mono.font-semibold.text-sm').nth(0);
        this.hazardousHandlingPercentage = page.locator('span.font-mono.font-semibold.text-sm').nth(1);
        */
        this.emissionsFactorRiskBreakdown = this.getFactor(page, 'CO₂ Emissions');
        this.emissionsWeightRiskBreakdown = this.emissionsFactorRiskBreakdown.locator('./following-sibling::span');
        this.emissionsPercentage = this.emissionsFactorRiskBreakdown.locator('./..//following-sibling::div/span').nth(0);
        this.emissionsEnvironmentalRiskPercentage = this.emissionsFactorRiskBreakdown.locator('./..//following-sibling::div/span').nth(1);


    }

    private getFactorBtn(page: Page, section: string, level: string): Locator {
        return page.locator(section + ' button[value="' + level + '"]');
    }

    private getFactorBtnText(button: Locator, spanIndex: number): Locator {
        return button.locator('~ div span:nth-of-type(' + spanIndex + ')');
    }

    private getFactorHeader(page: Page, factor: string, element: string): Locator {
        return page.locator('//*[@id="' + factor + '"]/../..//preceding-sibling::div//' + element);
    }

    private getHazardousBtnTitle(page: Page, label: string, span: string): Locator {
        return page.locator('//*[@for="hazardous"]//..//..//label[' + label + ']//span[' + span + ']');
    }

    private getFactor(page: Page, factor: string): Locator {
        return page.locator('//span[normalize-space()="' + factor + '"]');
    }

    private
}