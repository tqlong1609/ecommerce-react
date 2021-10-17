import { IUserLogin } from "../../screens/SigninScreen";
import { EUserLogin } from "../action-types";
import { ActionUserLogin } from "../actions";

interface IUserLoginState {
    isLoading?: boolean,
    user?: IUserLogin,
    error?: string,
}

const initState: IUserLoginState = { isLoading: false }

export const userLogin = (state: IUserLoginState = initState, action: ActionUserLogin): IUserLoginState => {
    switch (action.type) {
        case EUserLogin.SIGN_IN_REQUEST:
            return { isLoading: true }
        case EUserLogin.SIGN_IN_SUCCESS: {
            return { isLoading: false, user: action.payload }
        }
        case EUserLogin.SIGN_IN_FAIL:
            return { isLoading: false, error: action.payload }
        case EUserLogin.SIGN_OUT:
            return {}
        default:
            return state
    }
}