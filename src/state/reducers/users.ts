import { IUserLogin } from "../../screens/SigninScreen";
import { EUser } from "../action-types";
import { ActionUser } from "../actions";

export interface IUserLoginState {
    isLoading?: boolean,
    user?: IUserLogin,
    error?: string,
}

export interface IUserSignIn {
    isLoading?: boolean,
    error?: string,
}

const initState: IUserLoginState = { isLoading: false }

export const usersLogin = (state: IUserLoginState = initState, action: ActionUser): IUserLoginState => {
    switch (action.type) {
        case EUser.SIGN_IN_REQUEST:
            return { isLoading: true }
        case EUser.SIGN_IN_SUCCESS: {
            return { isLoading: false, user: action.payload }
        }
        case EUser.SIGN_IN_FAIL:
            return { isLoading: false, error: action.payload }
        case EUser.SIGN_OUT:
            return {}
        default:
            return state
    }
}

export const usersRegister = (state: IUserSignIn = initState, action: ActionUser): IUserSignIn => {
    switch (action.type) {
        case EUser.REGISTER_USER_REQUEST:
            return { isLoading: true }
        case EUser.REGISTER_USER_SUCCESS:
            return { isLoading: false }
        case EUser.REGISTER_USER_FAIL:
            return { isLoading: false, error: action.payload }
        default:
            return state
    }
}
