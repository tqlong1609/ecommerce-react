import { IUserLogin } from "../../screens/Signin";
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

export interface IUserProfile {
    email?: string,
    name?: string,
    password?: string,
    isAdmin?: boolean,
    _id?: string
}

export interface IUserProfileState {
    isLoading?: boolean,
    error?: string,
    userProfile?: IUserProfile
}

const initState: IUserLoginState = { isLoading: false }
const initProfileState: IUserProfileState = { isLoading: false }

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

export const usersProfile = (state = initProfileState, action: ActionUser): IUserProfileState => {
    switch (action.type) {
        case EUser.PROFILE_USER_REQUEST:
            return { isLoading: true }
        case EUser.PROFILE_USER_SUCCESS:
            return { isLoading: false, userProfile: action.payload }
        case EUser.PROFILE_USER_FAIL:
            return { isLoading: false, error: action.payload }
        default:
            state;
    }
    return state
}

interface IUserUpdateState {
    isLoading?: boolean,
    error?: string,
    isSuccess?: boolean
}

const initUserUpdateState: IUserUpdateState = { isLoading: false }

export const usersUpdate = (state = initUserUpdateState, action: ActionUser): IUserUpdateState => {
    switch (action.type) {
        case EUser.PROFILE_USER_UPDATE_REQUEST:
            return { isLoading: true }
        case EUser.PROFILE_USER_UPDATE_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case EUser.PROFILE_USER_UPDATE_FAIL:
            return { isLoading: false, error: action.payload }
        case EUser.PROFILE_USER_UPDATE_RESET:
            return {}
        default:
            return state
    }
}