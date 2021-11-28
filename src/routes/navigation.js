const createFrom = (history) => ({
    goToAgentsPage: () => history.push('/agency/agent'),
    goToForecastPage: () => history.push('/agency/forecast'),
    goToAgentRegistrationPage: () => history.push('/agency/agent/register'),
    goToAgentEditPage: (id) => history.push(`/agency/agent/account/${id}`),
    goToHomePage: () => history.push('/agency/home'),
    goToSimulationPage: () => history.push('/agency/forecast/simulation'),
});

export default {
    createFrom
};