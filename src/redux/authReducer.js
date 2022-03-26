const SET_USER_DATA = 'SET-USER-DATA'
const AUTH_ERROR = 'AUTH-ERROR'
const CLEAR_AUTH_ERROR = 'CLEAR-AUTH-ERROR'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errors: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                errors: null
            }
        case 'AUTH-ERROR':
            return {
                ...state,
                errors: action.message
            }
        case 'CLEAR-AUTH-ERROR':
            return {
                ...state,
                errors: null
            }
        default: {
            return state;

        }
    }
}

export const setUserData = (userId, login, email, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, login, email, isAuth } }
}

export const authError = (message) => {
    return { type: AUTH_ERROR, message }
}

export const authClear = () => {
    return { type: CLEAR_AUTH_ERROR }
}


// export const loginUser = () => {
//     return { type: LOGIN_USER}
// }

export default authReducer