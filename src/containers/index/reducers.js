import Constants from './constants'

const INITIAL_STATE = {
    maximumSeat: 60,
    totalPeople: 1
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.INDEX_TOTAL_PEOPLE_CHANGED:
            return {
                ...state,
                totalPeople: action.payload
            }
        default:
            return state
    }
}
