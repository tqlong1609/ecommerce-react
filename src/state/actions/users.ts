import axios from "axios";
import { Dispatch } from "react";
import { ActionUser, IErrorResponse } from ".";
import { EUser } from "../action-types";
import { IUserLogin } from '../../screens/SigninScreen'
import { USER_SIGN_IN_KEY } from "../../constants";
import { State } from "..";
import { IError } from "../../screens/HomeScreen";

interface IUserRegister {
    name: string,
    email: string,
    password: string,
    isAdmin?: boolean
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
}