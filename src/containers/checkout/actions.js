import Constants from './constants'

export const calculate = (totalPeople) => {
    return (dispatch) => {
        dispatch({
            type: Constants.CHECKOUT_CALCULATE,
            payload: totalPeople
        })
    }
}
