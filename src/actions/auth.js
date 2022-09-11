import {
    LOGIN_RESPONSE,
    FORGOT_RESPONSE,
    LOGOUT,
    REGISTER_RESPONSE,
    VERIFY_OTP_RESPONSE,
    VALIDATE_OTP_RESPONSE,
    RESET_PASSWORD_RESPONSE,
    SOCIAL_LOGIN_RESPONSE,
    GET_ALL_COUNTRIES,
    USER_DATA,
    USER_TOKEN,
    UPDATE_USER,
    CHANGE_PASSWORD,
    CALL_RESPONSE
} from './types';

import { base_url } from "../constants/const"
import { apiCall } from "../api";

const token = localStorage.getItem("token")

export const login = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/login`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: LOGIN_RESPONSE,
        payload: response?.data
    })
}

export const socialLogin = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/social_login`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: SOCIAL_LOGIN_RESPONSE,
        payload: response?.data
    })
}

export const forgotPassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/forgot`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: FORGOT_RESPONSE,
        payload: response?.data
    })
}

export const verifyOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/verify_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VERIFY_OTP_RESPONSE,
        payload: response.data
    })
}

export const validateOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/validate_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VALIDATE_OTP_RESPONSE,
        payload: response.data
    })
}

export const ResetPasswordWithOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/reset_password`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: RESET_PASSWORD_RESPONSE,
        payload: response.data
    })
}

export const registerUser = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/register`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: REGISTER_RESPONSE,
        payload: response.data
    })
}

// now with token

export const getUserData = () => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}auth/get`
    }
    let response = await apiCall(config, dispatch)
    if(!response.data.status){
        localStorage.removeItem("token")
        dispatch({
            type: USER_TOKEN,
            payload: ""
        })
        return false
    } else {
        dispatch({
            type: USER_DATA,
            payload: response.data
        })
    }
}

export const updateUserData = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}auth/update_details`,
        data
    }
    let response = await apiCall(config, dispatch)
    // dispatch({
    //     type: UPDATE_USER,
    //     payload: response.data
    // })
    dispatch(getUserData())
}

export const getAllCountries = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}auth/get_all_countries`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_ALL_COUNTRIES,
        payload: response.data
    })
}

export const changePassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}auth/change_password`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CHANGE_PASSWORD,
        payload: response.data
    })
}

export const logout = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/logout`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: LOGOUT,
        payload: response.data
    })
}

export const setCallResponse = (data) => async dispatch => {
    dispatch({
        type: CALL_RESPONSE,
        payload: data
    })
}

export const setUserToken = (data) => async dispatch => {
    dispatch({
        type: USER_TOKEN,
        payload: data
    })
}