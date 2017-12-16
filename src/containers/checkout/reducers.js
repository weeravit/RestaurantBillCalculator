import Constants from './constants'

const INITIAL_STATE = {
    totalPrice: 0,
    totalDiscountPrice: 0,
    promotions: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.CHECKOUT_CALCULATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

