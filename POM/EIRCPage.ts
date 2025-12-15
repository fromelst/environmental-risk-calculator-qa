import { Page, Locator } from '@playwright/test';
export class EIRCPage {
    readonly title: Locator;
    readonly subtitle: Locator;
    readonly signOutBtn: Locator;

    // User input
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
    readonly hazardousHandlingNoBtnText: Locator;
    readonly hazardousHandlingNoBtnSubtext: Locator;
    readonly hazardousHandlingYesBtnText: Locator;
    readonly hazardousHandlingYesBtnSubtext: Locator;

    // Risk Breakdown Calculator results
    readonly totalEnvironmentalRisk: Locator;
    readonly emissionsFactorRiskBreakdown: Locator;
    readonly emissionsWeightRiskBreakdown: Locator;
    readonly emissionsPercentage: Locator;
    readonly emissionsEnvironmentalRiskPercentage: Locator;

    readonly proximityFactorRiskBreakdown: Locator;
    readonly proximityWeightRiskBreakdown: Locator;
    readonly proximityPercentage: Locator;
    readonly proximityEnvironmentalRiskPercentage: Locator;

    readonly wasteManagementFactorRiskBreakdown: Locator;
    readonly wasteManagementWeightRiskBreakdown: Locator;
    readonly wasteManagementPercentage: Locator;
    readonly wasteManagementEnvironmentalRiskPercentage: Locator;

    readonly recyclingFactorRiskBreakdown: Locator;
    readonly recyclingWeightRiskBreakdown: Locator;
    readonly recyclingPercentage: Locator;

    readonly hazardousHandlingFactorRiskBreakdown: Locator;
    readonly hazardousHandlingWeightRiskBreakdown: Locator;
    readonly hazardousHandlingPercentage: Locator;

    // Risk Breakdown Legend
    readonly emissionsFactorLegend: Locator;
    readonly emissionsWeightLegend: Locator;

    readonly proximityFactorLegend: Locator;
    readonly proximityWeightLegend: Locator;

    readonly wasteManagementFactorLegend: Locator;
    readonly wasteManagementWeightLegend: Locator;

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
        this.wasteManagementSubtitle = this.getFactorHeader(page, 'recycling', 'p').nth(0);

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
        this.hazardousHandlingNoBtnText = this.getHazardousBtnTitle(page, '1', '1');
        this.hazardousHandlingNoBtnSubtext = this.getHazardousBtnTitle(page, '1', '2');
        this.hazardousHandlingYesBtnText = this.getHazardousBtnTitle(page, '2', '1');
        this.hazardousHandlingYesBtnSubtext = this.getHazardousBtnTitle(page, '2', '2');

        // Total environmetal risk
        this.totalEnvironmentalRisk = page.locator('span.font-mono.font-bold');

        // Risk Breakdown Calculator
        this.emissionsFactorRiskBreakdown = this.getFactorWeightCalculator(page, 'CO₂ Emissions');
        this.emissionsWeightRiskBreakdown = this.emissionsFactorRiskBreakdown.locator('~ span'); // zou nu moeten werken, '~ span' zou ook moeten werken xpath=following-sibling::span
        this.emissionsPercentage = this.emissionsFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span[1]');
        this.emissionsEnvironmentalRiskPercentage = this.emissionsFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span[2]');

        this.proximityFactorRiskBreakdown = this.getFactorWeightCalculator(page, 'Proximity to Protected Areas');
        this.proximityWeightRiskBreakdown = this.proximityFactorRiskBreakdown.locator('~ span');
        this.proximityPercentage = this.proximityFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span[1]');
        this.proximityEnvironmentalRiskPercentage = this.proximityFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span[2]');

        this.wasteManagementFactorRiskBreakdown = this.getFactorWeightCalculator(page, 'Waste Management');
        this.wasteManagementWeightRiskBreakdown = this.wasteManagementFactorRiskBreakdown.locator('~ span');
        this.wasteManagementPercentage = this.wasteManagementFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span[1]');
        this.wasteManagementEnvironmentalRiskPercentage = this.wasteManagementFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span[2]');

        this.recyclingFactorRiskBreakdown = this.getFactorWeightCalculator(page, 'Recycling Efficiency');
        this.recyclingWeightRiskBreakdown = this.recyclingFactorRiskBreakdown.locator('~ span');
        this.recyclingPercentage = this.recyclingFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span');

        this.hazardousHandlingFactorRiskBreakdown = this.getFactorWeightCalculator(page, 'Hazardous Waste Handling');
        this.hazardousHandlingWeightRiskBreakdown = this.hazardousHandlingFactorRiskBreakdown.locator('~ span');
        this.hazardousHandlingPercentage = this.hazardousHandlingFactorRiskBreakdown.locator('xpath=//..//following-sibling::div[1]//span');

        // Risk Breakdown Legend
        this.emissionsFactorLegend = this.getFactorWeightsLegend(page, 'CO₂ Emissions');
        this.emissionsWeightLegend = this.emissionsFactorLegend.locator('~ span');

        this.proximityFactorLegend = this.getFactorWeightsLegend(page, 'Proximity to Protected Areas');
        this.proximityWeightLegend = this.proximityFactorLegend.locator('~ span');

        this.wasteManagementFactorLegend = this.getFactorWeightsLegend(page, 'Waste Management');
        this.wasteManagementWeightLegend = this.wasteManagementFactorLegend.locator('~ span');
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

    private getFactorWeightCalculator(page: Page, factor: string): Locator {
        return page.locator('//span[normalize-space()="' + factor + '"]').nth(0);
    }

    private getFactorWeightsLegend(page: Page, factor: string): Locator {
        return page.locator('//span[normalize-space()="' + factor + '"]').nth(1);
    }

    public async setEverythingLowRisk() {
        await this.emissionsLowText.click();
        await this.proximityLowText.click();
        await this.recyclingHighText.click();
        await this.hazardousHandlingNoBtnText.click();
    }
}