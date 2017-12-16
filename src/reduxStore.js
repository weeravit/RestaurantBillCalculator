import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const reduxStore = (initialState, options) => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunkMiddleware)
    )
};

export default reduxStore
