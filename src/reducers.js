import {combineReducers} from 'redux'
import IndexReducers from './containers/index/reducers'
import CheckoutReducers from './containers/checkout/reducers'

export default combineReducers({
    index: IndexReducers,
    checkout: CheckoutReducers
})
