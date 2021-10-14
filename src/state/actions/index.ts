import { IProductCart } from '..'
import { IProduct } from '../../components/Products'
import { EProductDetail, EProductList } from '../action-types'
import { ECartItems } from '../action-types/cartItems'
export { listProducts } from './productList'
export { productDetail } from './productDetail'

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

export interface IErrorResponse {
    response: { data: { message: string }, status: number }
}

// Add Product Cart
export interface IAddProductToCart {
    type: ECartItems.ADD_PRODUCT_CART,
    payload: IProductCart
}

export interface IRemoveProductFromCart {
    type: ECartItems.REMOVE_PRODUCT_CART,
    payload: { productId: number }

}

export type ActionProductList = ProductListRequestAction | ProductListSuccessAction | ProductListFailAction
export type ActionProductDetail = ProductDetailRequestAction | ProductDetailSuccessAction | ProductDetailFailAction
export type ActionCartProduct = IAddProductToCart | IRemoveProductFromCart