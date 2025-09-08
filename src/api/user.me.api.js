import api from "../utils/api/api.js"

export function ApiGetUserMe() {
    return api({
        url: "/api/getUserMe",
        method: "GET"
    })
}