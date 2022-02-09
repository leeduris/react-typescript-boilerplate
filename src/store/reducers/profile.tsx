import { profileActionType } from '../actionTypes'
import { profileProps } from './types'

const initialState: profileProps = {
    isLoggedIn: false
}

const reducers = (state = { ...initialState }, action) => {
    switch (action.type) {
        case profileActionType.UPDATE_PROFILE_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default reducers;
