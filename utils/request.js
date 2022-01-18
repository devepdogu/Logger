import { BASE as BASE_URL, GAME_PATH as ROW_URL } from '../utils/urls'
const REQUEST_OPTIONS = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: {}
}


async function request(url, isRow = false, data = null, options = {}) {
    try {
        const response = await fetch((!isRow ? BASE_URL : ROW_URL) + url, !isRow ? {
            method: options?.method || REQUEST_OPTIONS.method,
            mode: options?.mode || REQUEST_OPTIONS.mode,
            cache: options?.cache || REQUEST_OPTIONS.cache,
            credentials: options?.credentials || REQUEST_OPTIONS.credentials,
            headers: options?.headers || REQUEST_OPTIONS.headers,
            redirect: options?.redirect || REQUEST_OPTIONS.redirect,
            referrerPolicy: options?.referrerPolicy || REQUEST_OPTIONS.referrerPolicy,
            body: data != null && typeof data === "object" ? JSON.stringify(data) : {}
        } : {});
        return response.json();
    } catch (e) {
        return console.dir(e)
    }
}


async function championReq(url, data = {}, options = { method: "post" }) {
    return request(url, true, null, options, true)
}


async function post(url, data = {}, options = { method: "post" }) {
    return request(url, false, data, options)
}

async function get(url, options = { method: "get" }) {
    return request(url, false, null, options)
}

module.exports = {
    post,
    get,
    championReq
}