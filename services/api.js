import Axios from 'axios'
const baseUrl = process.env.BASE_URL_JSON_SERVER_API
export const getCategories = () => {
    return Axios.get(`${process.env.BASE_URL_JSON_SERVER_API}categories`)
};

export const getTopSellersProducts = () => {
    return Axios.get(`${process.env.BASE_URL_JSON_SERVER_API}top-sellers-products`)
};

export const getTopNewProducts = () => {
    return Axios.get(`${process.env.BASE_URL_JSON_SERVER_API}top-new-products`)
};

export const getProductsByCategories = (catId) => {
    return Axios.get(`${process.env.BASE_URL_JSON_SERVER_API}products-lists/${catId}`)
};

export const addCart = () => {
    return Axios.post(`${process.env.BASE_URL_JSON_SERVER_API}carts`)
};

export const getCartByID = (cartId) => {
    return Axios.get(`${process.env.BASE_URL_JSON_SERVER_API}carts/${cartId}`)
};


export const updateCart = (cart) => {
    return Axios.put(`${process.env.BASE_URL_JSON_SERVER_API}carts/${cart.id}`, cart)
};



