import { combineReducers } from 'redux';
import { IProduct } from '../../components/Products';
import { productList } from './productList'

export interface IProductListState {
    isLoading: boolean,
    products?: Array<IProduct> | [],
    error?: string
}

const reducer = combineReducers({
    productList: productList
});

export default reducer
export type State = ReturnType<typeof reducer>