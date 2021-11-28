const {XMLHttpRequest} = require('xmlhttprequest');

const servicesHost = process.env.REACT_APP_SERVICE_HOST;

const getAgentById = (agentId) => {
    const url = `${servicesHost}/api/agent/${agentId}`
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const promiseHandler = (resolve, reject) => {
        request.onload = function () {
            try {
                const agent = JSON.parse(request.responseText);
                resolve(agent);
            } catch (e) {
                reject(`Failed to reach getAgentById API [${request.status}]`);
            }
        };

        request.onerror = function () {
            reject(`Failed to reach getAgentById API [${request.status}]`);
        };
    }
    request.send();
    return new Promise(promiseHandler);
}
const getAgents = () => {
    const url = `${servicesHost}/api/agent/`
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const promiseHandler = (resolve, reject) => {
        request.onload = function () {
            try {
                const agents = JSON.parse(request.responseText);
                resolve(agents);
            } catch (e) {
                reject(`Failed to reach getAllAgents API [${request.status}]`);
            }
        };

        request.onerror = function () {
            reject(`Failed to reach getAllAgents API [${request.status}]`);
        };
    }
    request.send();
    return new Promise(promiseHandler);
};

const addAgent = (agent) => {
    const url = `${servicesHost}/api/agent/`
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const promiseHandler = (resolve, reject) => {
        request.onload = function () {
            try {
                resolve();
            } catch (e) {
                reject(`Failed to reach addAgent API [${request.status}]`);
            }
        };

        request.onerror = function () {
            reject(`Failed to reach addAgent API [${request.status}]`);
        };
    }
    request.send(JSON.stringify(agent));
    return new Promise(promiseHandler);
};

const removeAgent = (agentId) => {
    const url = `${servicesHost}/api/agent/${agentId}`
    const request = new XMLHttpRequest();
    request.open('DELETE', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const promiseHandler = (resolve, reject) => {
        request.onload = function () {
            try {
                resolve();
            } catch (e) {
                reject(`Failed to reach removeAgent API [${request.status}]`);
            }
        };

        request.onerror = function () {
            reject(`Failed to reach removeAgent API [${request.status}]`);
        };
    }
    request.send();
    return new Promise(promiseHandler);
}

const updateAgent = (agent) => {
    if (!agent) {
        return;
    }

    if (!agent.id) {
        return;
    }
    const url = `${servicesHost}/api/agent/${agent.id}`
    const request = new XMLHttpRequest();
    request.open('PUT', url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const promiseHandler = (resolve, reject) => {
        request.onload = function () {
            try {
                resolve();
            } catch (e) {
                reject(`Failed to reach updateAgent API [${request.status}]`);
            }
        };

        request.onerror = function () {
            reject(`Failed to reach updateAgent API [${request.status}]`);
        };
    }
    request.send(JSON.stringify(agent));
    return new Promise(promiseHandler);
}
export {
    getAgentById,
    getAgents,
    addAgent,
    removeAgent,
    updateAgent,
}