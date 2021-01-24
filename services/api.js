import Axios from 'axios'
const baseUrl = process.env.BASE_URL_JSON_SERVER_API
export const getCategories = () => {
    return Axios.get(`${baseUrl}categories`)
};

export const getTopSellersProducts = () => {
    return Axios.get(`${baseUrl}top-sellers-products`)
};

export const getTopNewProducts = () => {
    return Axios.get(`${baseUrl}top-new-products`)
};

export const getProductsByCategories = (catId) => {
    return Axios.get(`${baseUrl}products-lists/${catId}`)
};

export const addCart = () => {
    return Axios.post(`${baseUrl}carts`)
};

export const getCartByID = (cartId) => {
    return Axios.get(`${baseUrl}carts/${cartId}`)
};


export const updateCart = (cart) => {
    return Axios.put(`${process.env.BASE_URL_JSON_SERVER_API}carts/${cart.id}`, cart)
};

export const searchProducts = (query) => {
    return Axios.get(`${process.env.BASE_URL_JSON_SERVER_API}products?q=${query}`)
};



