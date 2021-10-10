import { combineReducers } from 'redux';
import { IProduct } from '../../components/Products';
import {  } from '../reducers/productList';
import { productDetail } from './productDetail';
import { productList } from './productList'

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

const reducer = combineReducers({
    productList: productList,
    productDetail: productDetail
});

export default reducer
export type State = ReturnType<typeof reducer>