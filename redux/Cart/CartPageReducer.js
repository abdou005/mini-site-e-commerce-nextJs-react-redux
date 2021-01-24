import { CART_ID_FETCHED, CART_DATA_FETCHED, CART_DATA_UPDATED, ORDER_CREATE } from '../actions/actionTypes';

const initialState = {
    cartId: "",
    cartData: {},
    cartQty: 0,
    cartTotal: 0
};

const CartPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ID_FETCHED:
            return {
                ...state,
                cartId: action.cartId
            };

        case CART_DATA_FETCHED:
            return {
                ...state,
                cartData: action.cartData,
                cartQty: action.cartQty,
                cartTotal: action.cartTotal
            };
        case CART_DATA_UPDATED:
            return {
                ...state,
                cartData: action.cartData,
                cartQty: action.cartQty,
                cartTotal: action.cartTotal


            };
        case CART_DATA_UPDATED:
            return {
                ...state,
                cartData: action.cartData,
                cartQty: action.cartQty,
                cartTotal: action.cartTotal


            };
        case ORDER_CREATE:
            return {
                ...state,
                cartId: '',
                cartData: action.cartData,
                cartQty: action.cartQty,
                cartTotal: action.cartTotal,
                order: action.order
            };

        default:
            return state;
    }
};

export default CartPageReducer;
