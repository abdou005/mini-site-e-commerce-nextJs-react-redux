import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import homePageReducer from './Home/HomePageReducer'
import cartPageReducer from './Cart/CartPageReducer'

const combinedReducer = combineReducers({
    homePage: homePageReducer,
    cartPage: cartPageReducer,
});


const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.cartPage.cartId || state.cartPage.cartQte > 0) {
            nextState.cartPage.cartId = state.cartPage.cartId
            nextState.cartPage.cartData = state.cartPage.cartData
            nextState.cartPage.cartQty = state.cartPage.cartQty
            nextState.cartPage.cartTotal = state.cartPage.cartTotal

        }  // preserve value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export default reducer;