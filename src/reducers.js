import {combineReducers} from 'redux'
import IndexReducers from './containers/index/reducers'

export default combineReducers({
    index: IndexReducers,
})
