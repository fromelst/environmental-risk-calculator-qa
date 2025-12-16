export const factorData = {
    emissions: {
        title: 'Emissions',
        subtitle: 'The amount of CO2 emissions produced by the company on a yearly basis',
        levels: {
            low: {
                value: '0%',
                text: 'Low',
                subtext: 'No Risk'
            },
            medium: {
                value: '50%',
                text: 'Medium',
                subtext: 'Medium Risk'
            },
            high: {
                value: '100%',
                text: 'High',
                subtext: 'Maximum Risk'
            }
        },
        weight: '40%'
    },
    proximity: {
        title: 'Proximity to Protected Areas',
        subtitle: 'The distance of the company to the nearest protected area',
        levels: {
            low: {
                value: '0%',
                text: 'Low',
                subtext: 'No Risk'
            },
            medium: {
                value: '50%',
                text: 'Medium',
                subtext: 'Medium Risk'
            },
            high: {
                value: '100%',
                text: 'High',
                subtext: 'Maximum Risk'
            }
        },
        weight: '35%'
    },
    wasteManagement: {
        title: 'Waste Management',
        subtitle: 'Recycling efficiency and hazardous waste handling',
        subFactors: ['recycling', 'hazardousHandling'],
        weight: '25%'
    },
    recycling: {
        title: 'Recycling Efficiency',
        subtitle: 'Higher efficiency means lower environmental risk',
        levels: {
            high: {
                value: '0%',
                text: 'High',
                subtext: 'No Risk'
            },
            medium: {
                value: '50%',
                text: 'Medium',
                subtext: 'Medium Risk'
            },
            low: {
                value: '100%',
                text: 'Low',
                subtext: 'Maximum Risk'
            }
        },
        weight: '30%'
    },
    hazardousHandling: {
        title: 'Hazardous Waste Handling',
        subtitle: 'Does the facility handle hazardous waste materials?',
        options: {
            no: {
                value: '0%',
                text: 'No',
                subtext: 'No Risk'
            },
            yes: {
                value: '100%',
                text: 'Yes',
                subtext: 'Maximum Risk'
            }
        },
        weight: '70%'
    }
};

