import { addCart, getCartByID, updateCart } from "../../services/api";
import Cookies from 'js-cookie'
import { CART_ID_FETCHED, CART_DATA_FETCHED } from "./actionTypes";

export const prepareCart = () => async (dispatch) => {
    let cartId = Cookies.get("cartId")
    if (typeof (cartId) === "undefined") {
        const response = await addCart()
        cartId = response.data.id
        Cookies.set("cartId", cartId)
    }
    dispatch({
        type: CART_ID_FETCHED,
        cartId: cartId,
    });
    const response = await getCartByID(cartId)
    const result = response.data

    dispatch({
        type: CART_DATA_FETCHED,
        cartTotal: (result.hasOwnProperty('items')) ? getTotal(result.items) : 0,
        cartQty: (result.hasOwnProperty('items')) ? getTotalQuantity(result.items) : 0,
        cartData: result
    });
}
export const updateCartData = (cart) => async (dispatch) => {
    const response = await updateCart(cart)
    const data = response.data
    dispatch({
        type: CART_DATA_FETCHED,
        cartTotal: getTotal(data.items),
        cartQty: getTotalQuantity(data.items),
        cartData: data
    });
}

const getTotal = (products) => {
    let total = 0;
    products.forEach((item) => {
        total += item.price * item.qty;
    });
    return total;
};
const getTotalQuantity = (products) => {
    let total = 0;
    products.forEach((item) => {
        total += parseInt(item.qty);
    });
    return total;
};





