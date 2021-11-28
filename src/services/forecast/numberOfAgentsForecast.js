const agentsNumberForecaster = ({currentNumberOfAgents, hiringPeriod, numberOfHiredAgentsPerPeriod}) => {
    const currentYear = new Date().getFullYear();

    return function forecast(year) {
        return currentNumberOfAgents + (year - currentYear) / hiringPeriod * numberOfHiredAgentsPerPeriod;
    }

}
export default agentsNumberForecaster;