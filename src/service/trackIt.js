import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function postSubscription(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function postLogInto(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function postHabit(body, config) {
    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

function getHabit(config) {
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function getTodayHabit(config) {
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

export {
    postSubscription,
    postLogInto,
    postHabit,
    getHabit,
    getTodayHabit
}