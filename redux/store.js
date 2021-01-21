import reducers from './combinedReducer';
import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}


const initStore = () => {
    return createStore(reducers, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore) 