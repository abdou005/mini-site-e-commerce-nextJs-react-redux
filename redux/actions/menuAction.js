import { getCategories } from "../../services/api";
import { CATEGORIES_LIST_FETCHED } from "./actionTypes";


export const allCategories = () => async (dispatch) => {
  const response = await getCategories()
  dispatch({
    type: CATEGORIES_LIST_FETCHED,
    categories: response.data,
  });
}
