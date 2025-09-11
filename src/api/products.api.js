import api from "../utils/api/api.js"

export function ApiGetProducts() {
    return api({
        url: "/api/products/products/admin",
        method: "GET"
    })
}

export function ApiDeleteProducts(id) {
    return api({
        url: `/api/products/my/${id}`,
        method: "DELETE"
    })
}