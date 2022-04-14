import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "X-Api-Factory-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`
    }
})
