import { combineReducers } from 'redux';
import { IProduct } from '../../components/Products';
import { productsCart } from './cartItem';
import { productDetail } from './productDetail';
import { productList } from './productList'
import { usersLogin, usersRegister } from './users';

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

export interface IProductCart extends IProduct {
    qty: number
}

const reducer = combineReducers({
    productList: productList,
    productDetail: productDetail,
    cartProducts: productsCart,
    userLogin: usersLogin,
    userRegister: usersRegister
});

export default reducer
export type State = ReturnType<typeof reducer>