import axios from "axios";
import { Dispatch } from "react";
import { ActionUserLogin, IErrorResponse } from ".";
import { EUserLogin } from "../action-types";
import { IUserLogin } from '../../screens/SigninScreen'
import { USER_SIGN_IN_KEY } from "../../constants";
import { State } from "..";

const instanceOfIUserLogin = (object: any): object is IUserLogin => {
    return 'email' in object
}

export const signIn = (email: string, password: string) => async (dispatch: Dispatch<ActionUserLogin>, getState: () => State) => {
    dispatch({ type: EUserLogin.SIGN_IN_REQUEST })
    try {
        const { data } = await axios.post('/api/users/signin', { email, password })
        if (data && instanceOfIUserLogin(data)) {
            dispatch({ type: EUserLogin.SIGN_IN_SUCCESS, payload: data })
            localStorage.setItem(USER_SIGN_IN_KEY, JSON.stringify(data))
        }
    } catch (error) {
        const e = error as IErrorResponse
        dispatch({
            type: EUserLogin.SIGN_IN_FAIL,
            payload: e.response.status === 401 ?
                e.response.data.message :
                (error as Error).message
        })
    }
}

export const signOut = () => async (dispatch: Dispatch<ActionUserLogin>) => {
    dispatch({ type: EUserLogin.SIGN_OUT })
    localStorage.removeItem(USER_SIGN_IN_KEY)
}