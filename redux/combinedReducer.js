import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import homePageReducer from './Home/HomePageReducer'
const combinedReducer = combineReducers({
    homePage: homePageReducer,
});


const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        //if (state.homePage.cart.cartTotalPrice) nextState.homePage.cart.cartTotalPrice = state.homePage.cart.cartTotalPrice // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export default reducer;