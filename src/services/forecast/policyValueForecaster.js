const policyValueForecaster = ({currentValue, policyCorrectionPeriod, policyPriceCorrectionPercentage}) => {
    return (year) => {
        const currentYear = new Date().getFullYear();

        if (!year) {
            throw new Error('year must be defined');
        }

        if (year < currentYear) {
            throw new Error('Unable to forecast policy price for the past years')
        }

        const correctionPeriods = parseInt((year - currentYear) / policyCorrectionPeriod)
        let value = currentValue;
        for (let period = 0; period < correctionPeriods; period += 1) {
            value = value + value * policyPriceCorrectionPercentage / 100;
        }

        return value;
    };
}

export default policyValueForecaster;