import policyValueForecaster from './policyValueForecaster';
import agentsNumberForecaster from './numberOfAgentsForecast';

const averagePoliciesPerYear = (averagePoliciesPerAgentPerMonth, numberOfWorkedMonthsPerYear) => averagePoliciesPerAgentPerMonth * numberOfWorkedMonthsPerYear;
const companyIncomePerPolicy = (commission, policyValue) => commission / 100 * policyValue

export default ({
                    agents,
                    agentPoliciesPerMonth,
                    correctionPeriod,
                    correctionPercentage,
                    commission,
                    policyValue,
                    annualHires,
                    numberOfWorkedMonthsPerYear = 12
                }) => {

    const forecastPolicyValue = policyValueForecaster({
        currentValue: policyValue,
        policyCorrectionPeriod: correctionPeriod,
        policyPriceCorrectionPercentage: correctionPercentage
    });
    const forecastAgentsNumber = agentsNumberForecaster({
        currentNumberOfAgents: agents,
        hiringPeriod: 1,
        numberOfHiredAgentsPerPeriod: annualHires
    });

    const forecastForYear = (year) => {
        const numberOfAgents = forecastAgentsNumber(year);
        const policyPrice = forecastPolicyValue(year);
        const numberOfPolicies = averagePoliciesPerYear(agentPoliciesPerMonth, numberOfWorkedMonthsPerYear)
        const companyPolicyIncome = companyIncomePerPolicy(commission, policyPrice);
        return (numberOfAgents * numberOfPolicies * companyPolicyIncome).toFixed(2);

    }
    return (numberOfYears) => {
        const currentYear = new Date().getFullYear();
        return [...Array(numberOfYears + 1).keys()]
            .map(key => currentYear + key++)
            .reduce((object, year) => {
                object[year] = forecastForYear(year);
                return object;
            }, {});
    }
}
