import {
  getTopNewProducts,
  getTopSellersProducts,
  getProductsByCategories,
  searchProducts,
  getProductByID
} from "../../services/api";
import { TOP_SELLERS_PRODUCTS_LIST_FETCHED, TOP_NEW_PRODUCTS_LIST_FETCHED, } from "./actionTypes";

// todo import action type like cartAction
export const topSellersProducts = () => async (dispatch) => {
  const response = await getTopSellersProducts()
  dispatch({
    type: TOP_SELLERS_PRODUCTS_LIST_FETCHED,
    topSellersProducts: response.data,
  });
  return response.data
}

export const topNewProducts = () => async (dispatch) => {
  const response = await getTopNewProducts()
  return dispatch({
    type: TOP_NEW_PRODUCTS_LIST_FETCHED,
    topNewProducts: response.data,
  });
}

export const fetchProductList = async (catId) => {
  const response = await getProductsByCategories(catId)
  return response.data
}

export const searchProduct = async (query) => {
  const response = await searchProducts(query)
  return response.data
}


export const fetchProductData = async (id) => {
  const response = await getProductByID(id)
  return response.data
}
