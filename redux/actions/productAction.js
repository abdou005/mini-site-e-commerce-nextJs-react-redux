import {
  getTopNewProducts,
  getTopSellersProducts,
  getProductsByCategories
} from "../../services/api";
import * as ActionType from "./actionTypes";

export const topSellersProducts = () => async (dispatch) => {
  const response = await getTopSellersProducts()
  return dispatch({
    type: ActionType.TOP_SELLERS_PRODUCTS_LIST_FETCHED,
    topSellersProducts: response.data,
  });
}

export const topNewProducts = () => async (dispatch) => {
  const response = await getTopNewProducts()
  return dispatch({
    type: ActionType.TOP_NEW_PRODUCTS_LIST_FETCHED,
    topNewProducts: response.data,
  });
}

export const fetchProductList = async (catId) => {
  const response = await getProductsByCategories(catId)
  return response.data
}
/*export const fetchProductList = (idCategory) => {
  return (dispatch) => {
    getProductsByCategories(idCategory)
      .then((result) => {
        dispatch({
          type: ActionType.CATEGORIE_PRODUCTS_LIST_DATA_FETCHED,
          productList: result.items,
          shopName: result.name,
        });

      })
      .catch((error) => {

      });
  };
};*/