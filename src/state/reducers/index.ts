import { combineReducers } from 'redux';
import { IProduct } from '../../components/Products';
import { productsCart, IProductCartState } from './cartItem';
import { productDetail } from './productDetail';
import { productList, productListFeature, productListLatest } from './productList'
import { usersLogin, usersProfile, usersRegister, usersUpdate } from './users';
import { EPaymentMethod } from "../../screens/PaymentScreen";
import { IPlaceOrderPostingResponse } from '../actions/placeOrder';
import { orderPlace } from './orderPlace';
import { orderDetail } from './orderDetail';
import { orderPayment } from './orderPayment'
import { orderHistory } from './orderHistory';

export interface IOrderPlace {
    _id: string,
    shippingAddress: string,
    paymentMethod: EPaymentMethod,
    itemPrice: number,
    shippingPrice: number,
    taxPrice: number
    totalPrice: number,
    user?: string,
}

export interface IProductListState {
    isLoading: boolean,
    products?: Array<IProduct> | [],
    error?: string
}

export interface IProductDetailState {
    isLoading: boolean,
    product?: IProduct | null,
    error?: string
}

export interface IOrderPlaceState {
    isLoading?: boolean,
    error?: string,
    order?: IPlaceOrderPostingResponse,
    isSuccess?: boolean
}

export interface IOrderPaymentState {
    isLoading?: boolean,
    error?: string,
    isSuccess?: boolean
}

export interface IProductCart extends IProduct {
    qty: number,
    size: string
}

const reducer = combineReducers({
    productList: productList,
    productDetail: productDetail,
    cartProducts: productsCart,
    userLogin: usersLogin,
    userRegister: usersRegister,
    orderPlace: orderPlace,
    orderDetail: orderDetail,
    orderPayment: orderPayment,
    orderHistory: orderHistory,
    userProfile: usersProfile,
    userUpdate: usersUpdate,
    productListFeature: productListFeature,
    productListLatest: productListLatest
});

export default reducer
export type State = ReturnType<typeof reducer>