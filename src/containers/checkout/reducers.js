import Constants from './constants'

const INITIAL_STATE = {
    totalPriceWithoutDiscount: 0,
    totalPriceWithDiscount: 0,
    discountPrice: 0,
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

