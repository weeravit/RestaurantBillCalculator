import Constants from './constants'

export const totalPeopleChanged = (total) => {
    return (dispatch) => {
        dispatch({
            type: Constants.INDEX_TOTAL_PEOPLE_CHANGED,
            payload: total
        })
    }
}
