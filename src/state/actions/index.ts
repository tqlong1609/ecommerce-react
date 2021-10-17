import { IProductCart } from '..'
import { IProduct } from '../../components/Products'
import { IUserLogin } from '../../screens/SigninScreen'
import { EProductDetail, EProductList, EUserLogin } from '../action-types'
import { ECartItems } from '../action-types/cartItems'
export { listProducts } from './productList'
export { productDetail } from './productDetail'
export { signIn } from './userLogin'

// Product list
interface ProductListRequestAction {
    type: EProductList.PRODUCT_LIST_REQUEST
}

interface ProductListSuccessAction {
    type: EProductList.PRODUCT_LIST_SUCCESS
    payload: Array<IProduct>
}

interface ProductListFailAction {
    type: EProductList.PRODUCT_LIST_FAIL
    payload: string
}

// product detail
interface ProductDetailRequestAction {
    type: EProductDetail.PRODUCT_DETAIL_REQUEST
}

interface ProductDetailSuccessAction {
    type: EProductDetail.PRODUCT_DETAIL_SUCCESS
    payload: IProduct
}

interface ProductDetailFailAction {
    type: EProductDetail.PRODUCT_DETAIL_FAIL
    payload: string
}

// Product Cart
interface IAddProductToCart {
    type: ECartItems.ADD_PRODUCT_CART,
    payload: IProductCart
}

interface IRemoveProductFromCart {
    type: ECartItems.REMOVE_PRODUCT_CART,
    payload: { productId: string }

}

// User login
interface IUserSignIn {
    type: EUserLogin.SIGN_IN_REQUEST,
}

interface IUserSignInSuccess {
    type: EUserLogin.SIGN_IN_SUCCESS,
    payload: IUserLogin
}

interface IUserSignInFail {
    type: EUserLogin.SIGN_IN_FAIL,
    payload: string
}

interface IUserSignOut {
    type: EUserLogin.SIGN_OUT,
}

export interface IErrorResponse {
    response: { data: { message: string }, status: number }
}
export type ActionProductList = ProductListRequestAction | ProductListSuccessAction | ProductListFailAction
export type ActionProductDetail = ProductDetailRequestAction | ProductDetailSuccessAction | ProductDetailFailAction
export type ActionCartProduct = IAddProductToCart | IRemoveProductFromCart
export type ActionUserLogin = IUserSignIn | IUserSignInSuccess | IUserSignInFail | IUserSignOut