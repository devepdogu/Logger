import { RIOT_PATH } from "./urls";
import spells from '../public/assets/spells.json'
import regions from '../public/assets/regions.json'

const API_KEY = "RIOT API KEY HERE";


async function riotRequest(url, options) {
    if (typeof options?.region === "undefined" && typeof options?.group === "undefined")
        return {
            "success": false, "msg": `Region or group not found  URL:${url}`
        }

    const BASE_PATH = RIOT_PATH.replace('${REGION_PLACEHOLDER}', options?.region ?? options?.group) + `${url}${options?.query ?? false ? ((options.query.slice(0, 1) !== "?" ? ('?' + options.query) : options.query) + "&") : '?'}api_key=${API_KEY}`;
    const response = await fetch(BASE_PATH, {
        headers: {
            'Content-Type': 'application/json',
            "Accept-Charset": "application/json; charset=UTF-8",
        }
    });
    return response.json()


}

async function riot(url, options) {
    return riotRequest(url, options)
}

module.exports = {
    riot,
    regions,
    spells
}