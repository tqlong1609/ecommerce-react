import { IProductCart } from '..'
import { IProduct } from '../../components/Products'
import { EPaymentMethod } from '../../screens/PaymentScreen'
import { IUserLogin } from '../../screens/SigninScreen'
import { EOrderDetail, EOrderHistory, EPlaceOrder, EProductDetail, EProductList, EUser } from '../action-types'
import { ECartItems } from '../action-types/cartItems'
import { IUserProfile } from '../reducers/users'
import { IShippingAddress } from './cartItems'
import { IPlaceOrderPostingResponse } from './placeOrder'
export { listProducts } from './productList'
export { productDetail } from './productDetail'
export { signIn, signOut, instanceOfIUserLogin, registerUser } from './users'

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

interface IClearCart {
    type: ECartItems.CART_EMPTY
}

// User login
interface IUserSignIn {
    type: EUser.SIGN_IN_REQUEST,
}

interface IUserSignInSuccess {
    type: EUser.SIGN_IN_SUCCESS,
    payload: IUserLogin
}

interface IUserSignInFail {
    type: EUser.SIGN_IN_FAIL,
    payload: string
}

interface IUserSignOut {
    type: EUser.SIGN_OUT,
}

// User register
interface IUserRegisterRequest {
    type: EUser.REGISTER_USER_REQUEST
}

interface IUserRegisterSuccess {
    type: EUser.REGISTER_USER_SUCCESS,
}

interface IUserRegisterFail {
    type: EUser.REGISTER_USER_FAIL,
    payload: string
}

interface IShippingAddressRequest {
    type: ECartItems.SHIPPING_ADDRESS,
    payload: IShippingAddress
}

interface IPaymentMethodRequest {
    type: ECartItems.PAYMENT_METHOD,
    payload: EPaymentMethod
}

interface IPlaceOrderRequest {
    type: EPlaceOrder.PLACE_ORDER_REQUEST
}

interface IPlaceOrderSuccess {
    type: EPlaceOrder.PLACE_ORDER_SUCCESS,
    payload: IPlaceOrderPostingResponse
}
interface IPlaceOrderFail {
    type: EPlaceOrder.PLACE_ORDER_FAIL,
    payload: string
}
interface IPlaceOrderReset {
    type: EPlaceOrder.PLACE_ORDER_RESET,
}

interface IGetOrderRequest {
    type: EOrderDetail.GET_ORDER_REQUEST
}

interface IGetOrderSuccess {
    type: EOrderDetail.GET_ORDER_SUCCESS,
    payload: IPlaceOrderPostingResponse
}

interface IGetOrderFail {
    type: EOrderDetail.GET_ORDER_FAIL,
    payload: string
}

interface IGetOrderPaymentRequest {
    type: EOrderDetail.GET_ORDER_PAYMENT_REQUEST
}

interface IGetOrderPaymentSuccess {
    type: EOrderDetail.GET_ORDER_PAYMENT_SUCCESS,
    payload: any
}

interface IGetOrderPaymentFail {
    type: EOrderDetail.GET_ORDER_PAYMENT_FAIL,
    payload: string
}

interface IGetOrderPaymentReset {
    type: EOrderDetail.GET_ORDER_PAYMENT_RESET
}

interface IOrderHistoryRequest {
    type: EOrderHistory.ORDER_HISTORY_REQUEST
}

interface IOrderHistorySuccess {
    type: EOrderHistory.ORDER_HISTORY_SUCCESS,
    payload: Array<IPlaceOrderPostingResponse>
}

interface IOrderHistoryFail {
    type: EOrderHistory.ORDER_HISTORY_FAIL,
    payload: string
}

interface IProfileUserRequest {
    type: EUser.PROFILE_USER_REQUEST
}

interface IProfileUserSuccess {
    type: EUser.PROFILE_USER_SUCCESS,
    payload: IUserProfile
}

interface IProfileUserFail {
    type: EUser.PROFILE_USER_FAIL,
    payload: string
}

interface IProfileUserUpdateRequest {
    type: EUser.PROFILE_USER_UPDATE_REQUEST
}

interface IProfileUserUpdateSuccess {
    type: EUser.PROFILE_USER_UPDATE_SUCCESS,
}

interface IProfileUserUpdateFail {
    type: EUser.PROFILE_USER_UPDATE_FAIL,
    payload: string
}

interface IProfileUserUpdateReset {
    type: EUser.PROFILE_USER_UPDATE_RESET
}

export interface IErrorResponse {
    response: { data: { message: string }, status: number }
}
export type ActionProductList = ProductListRequestAction | ProductListSuccessAction | ProductListFailAction
export type ActionProductDetail = ProductDetailRequestAction | ProductDetailSuccessAction | ProductDetailFailAction
export type ActionCartProduct = IAddProductToCart | IRemoveProductFromCart | IShippingAddressRequest | IPaymentMethodRequest | IClearCart
export type ActionUser = IUserSignIn | IUserSignInSuccess | IUserSignInFail | IUserSignOut | IUserRegisterRequest | IUserRegisterSuccess | IUserRegisterFail | IProfileUserRequest | IProfileUserSuccess | IProfileUserFail | IProfileUserUpdateRequest | IProfileUserUpdateReset | IProfileUserUpdateSuccess | IProfileUserUpdateFail
export type ActionPlaceOrder = IPlaceOrderRequest | IPlaceOrderSuccess | IPlaceOrderFail | IPlaceOrderReset
export type ActionOrderDetail = IGetOrderRequest | IGetOrderSuccess | IGetOrderFail
export type ActionOrderPayment = IGetOrderPaymentRequest | IGetOrderPaymentSuccess | IGetOrderPaymentFail | IGetOrderPaymentReset
export type ActionOrderHistory = IOrderHistoryRequest | IOrderHistorySuccess | IOrderHistoryFail