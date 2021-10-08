import { IProduct } from '../../components/Products'
import { EProductList } from '../action-types'
export { listProducts } from './productList'

interface ProductListRequestAction {
    type: EProductList.PRODUCT_LIST_REQUEST
}

interface ProductListSuccessAction {
    type: EProductList.PRODUCT_LIST_SUCCESS
    payload: Array<IProduct>
}

interface ProductListFail {
    type: EProductList.PRODUCT_LIST_FAIL
    payload: string
}

export type Action = ProductListRequestAction | ProductListSuccessAction | ProductListFail