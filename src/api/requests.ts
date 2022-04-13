import { api } from "./config";

function requestGet(url: string) {
    return api.get(url);
}

function requestPost(url: string, body: any) {
    return api.post(url, JSON.stringify(body))
}

export {
    requestGet,
    requestPost
}