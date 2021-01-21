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
    /*return new Promise((resolve, reject) => {
        Axios.get(baseUrl + "products-lists/" + idCategory)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });*/
};


