export const getAuth = (state) => {
    return state.auth.isAuth
}

export const getUserId = (state) => {
    return state.auth.userId
}

export const getEmail = (state) => {
    return state.auth.email
}

export const getLogin = (state) => {
    return state.auth.login
}

export const getErrorMessage = (state) => {
    return state.auth.errors
}

export const getCaptchaUrl = (state) => {
    return state.auth.captchaUrl
}

export const getPhoto = (state) => {
    return state.auth.photoURL
}