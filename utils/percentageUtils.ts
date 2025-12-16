export const percentageUtils = {
    calculateFactorContribution: (levelPercentage: string, weightPercentage: string): string => {
        const levelDecimal = parseFloat(levelPercentage.replace('%', '')) / 100;
        const weightDecimal = parseFloat(weightPercentage.replace('%', '')) / 100;
        const result = levelDecimal * weightDecimal;
        return (result * 100).toFixed(1) + '%';
    },
    calculateFactorContributionWaste: (weightPercentage: string, subWeightPercentage1: string, subWeightPercentage2: string, levelPercentage1: string, levelPercentage2: string): string => {
        const weightDecimal = parseFloat(weightPercentage.replace('%', '')) / 100;
        const levelDecimal1 = parseFloat(levelPercentage1.replace('%', '')) / 100;
        const subWeightDecimal1 = parseFloat(subWeightPercentage1.replace('%', '')) / 100;
        const levelDecimal2 = parseFloat(levelPercentage2.replace('%', '')) / 100;
        const subWeightDecimal2 = parseFloat(subWeightPercentage2.replace('%', '')) / 100;
        const result = levelDecimal1 * weightDecimal * subWeightDecimal1 + levelDecimal2 * weightDecimal * subWeightDecimal2;
        return (result * 100).toFixed(1) + '%';
    },
    calculateWastePercentage: (subWeightPercentage1: string, subWeightPercentage2: string, levelPercentage1: string, levelPercentage2: string): string => {
        const levelDecimal1 = parseFloat(levelPercentage1.replace('%', '')) / 100;
        const subWeightDecimal1 = parseFloat(subWeightPercentage1.replace('%', '')) / 100;
        const levelDecimal2 = parseFloat(levelPercentage2.replace('%', '')) / 100;
        const subWeightDecimal2 = parseFloat(subWeightPercentage2.replace('%', '')) / 100;
        const result = levelDecimal1 * subWeightDecimal1 + levelDecimal2 * subWeightDecimal2;
        return (result * 100).toFixed(0) + '%';
    },

    addDecimalToPercentage: (percentage: string): string => {
        const numericValue = parseFloat(percentage.replace('%', ''));
        return numericValue.toFixed(1) + '%';
    },

    sumPercentages: (percentages: string[]): string => {
        let sum = 0;
        for (let i = 0; i < percentages.length; i++) {
            percentages[i] = percentages[i].replace('%', '');
            sum += parseFloat(percentages[i]);
        }
        return sum.toFixed(1) + '%';
    }
};
