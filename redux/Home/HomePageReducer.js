import { TOP_NEW_PRODUCTS_LIST_FETCHED, CATEGORIES_LIST_FETCHED, TOP_SELLERS_PRODUCTS_LIST_FETCHED } from '../actions/actionTypes';

const initialState = {
    cart: {
        cartTotalPrice: 0,
        cartItemQuantity: 0,
    },
    topSellersProducts: [],
    topNewProducts: [],
    categories: []
};

const HomePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOP_SELLERS_PRODUCTS_LIST_FETCHED:
            return {
                ...state,
                topSellersProducts: action.topSellersProducts,
            };
        case TOP_NEW_PRODUCTS_LIST_FETCHED:
            return {
                ...state,
                topNewProducts: action.topNewProducts,
            };
        case CATEGORIES_LIST_FETCHED:
            return {
                ...state,
                categories: action.categories,
            };
        default:
            return state;
    }
};

export default HomePageReducer;
