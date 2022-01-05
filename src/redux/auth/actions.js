import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS } from "../../constants/actionTypes"

export const loginUser = () => {
    return({
        type: LOGIN_USER,
        payload: null
    })
}

export const loginUserSuccess = (token) => {
    return({
        type: LOGIN_USER_SUCCESS,
        payload: token
    })
}


export const logoutUser = () => {
    return({
        type: LOGOUT_USER,
        payload: null
    })
}


export const logoutUserSuccess = () => {
    return({
        type: LOGOUT_USER_SUCCESS,
        payload: null
    })
}