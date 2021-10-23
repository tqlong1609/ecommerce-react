import axios from "axios";
import { Dispatch } from "react";
import { ActionUser, IErrorResponse } from ".";
import { EUser } from "../action-types";
import { IUserLogin } from '../../screens/SigninScreen'
import { PRODUCT_CART_ITEM_KEY, USER_SIGN_IN_KEY, SHIPPING_ADDRESS_KEY } from "../../constants";
import { State } from "..";
import { IError } from "../../screens/HomeScreen";
import { IUserProfile } from "../reducers/users";

interface IUserRegister {
    name: string,
    email: string,
    password: string,
    isAdmin?: boolean,
}

interface IUserUpdate {
    name?: string,
    email?: string,
    password?: string
}

export const instanceOfIUserLogin = (object: any): object is IUserLogin => {
    return 'email' in object
}

export const signIn = (email: string, password: string) => async (dispatch: Dispatch<ActionUser>, getState: () => State) => {
    dispatch({ type: EUser.SIGN_IN_REQUEST })
    try {
        const { data } = await axios.post('/api/users/signin', { email, password })
        if (data && instanceOfIUserLogin(data)) {
            dispatch({ type: EUser.SIGN_IN_SUCCESS, payload: data })
            localStorage.setItem(USER_SIGN_IN_KEY, JSON.stringify(data))
        }
    } catch (error) {
        const e = error as IErrorResponse
        dispatch({
            type: EUser.SIGN_IN_FAIL,
            payload: e.response.status === 401 ?
                e.response.data.message :
                (error as Error).message
        })
    }
}

export const registerUser = (user: IUserRegister) => async (dispatch: Dispatch<ActionUser>) => {
    dispatch({ type: EUser.REGISTER_USER_REQUEST })
    try {
        const { data } = await axios.post('/api/users/register', {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin || false,
            password: user.password
        })
        if (data && instanceOfIUserLogin(data)) {
            dispatch({ type: EUser.REGISTER_USER_SUCCESS })
            dispatch({ type: EUser.SIGN_IN_SUCCESS, payload: data })
            localStorage.setItem(USER_SIGN_IN_KEY, JSON.stringify(data))
        }
    } catch (error) {
        dispatch({ type: EUser.REGISTER_USER_FAIL, payload: (error as IError).message })
    }
}

export const signOut = () => async (dispatch: Dispatch<ActionUser>) => {
    dispatch({ type: EUser.SIGN_OUT })
    localStorage.removeItem(USER_SIGN_IN_KEY)
    localStorage.removeItem(PRODUCT_CART_ITEM_KEY)
    localStorage.removeItem(SHIPPING_ADDRESS_KEY)
}

export const getProfileUser = (id: string) => async (dispatch: Dispatch<ActionUser>, getState: () => State) => {
    dispatch({ type: EUser.PROFILE_USER_REQUEST })
    try {
        const { data } = await axios.get(`api/users/${id}`)
        dispatch({ type: EUser.PROFILE_USER_SUCCESS, payload: data as IUserProfile })
    } catch (error) {
        const e = error as IErrorResponse
        dispatch({
            type: EUser.PROFILE_USER_FAIL,
            payload: e.response.status === 404 ?
                e.response.data.message :
                (error as Error).message
        })
    }
}

export const updateProfileUser = (userUpdate: IUserUpdate) => async (dispatch: Dispatch<ActionUser>, getState: () => State) => {
    dispatch({ type: EUser.PROFILE_USER_UPDATE_REQUEST })
    try {
        const token = getState().userLogin.user?.token
        const { data } = await axios.put(`/api/users/profile`, userUpdate, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        dispatch({ type: EUser.PROFILE_USER_UPDATE_SUCCESS })
        dispatch({ type: EUser.SIGN_IN_SUCCESS, payload: data as IUserLogin })
        localStorage.setItem(USER_SIGN_IN_KEY, JSON.stringify(data))
    } catch (error) {
        dispatch({ type: EUser.PROFILE_USER_UPDATE_FAIL, payload: (error as IError).message })
    }
}

export const resetProfileUpdate = () => (dispatch: Dispatch<ActionUser>) => {
    dispatch({ type: EUser.PROFILE_USER_UPDATE_RESET })
}