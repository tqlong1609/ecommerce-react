import { IProductCart } from "."
import { ECartItems } from "../action-types/cartItems";
import { ActionProductAddToCart } from '../actions'

interface IProductCartState {
    productsCart: Array<IProductCart>
}

const initState: IProductCartState = { productsCart: [] }

const isExistInArray = (arrayProduct: Array<IProductCart>, product: IProductCart): boolean => {
    return arrayProduct.find(item => item._id === product._id) ? true : false
}

export const productsCart = (state = initState, action: ActionProductAddToCart): IProductCartState => {
    switch (action.type) {
        case ECartItems.ADD_PRODUCT_CART: {
            if (state.productsCart?.length > 0 && isExistInArray(state.productsCart, action.payload)) {
                const cartUpdated = state.productsCart.map(productCart => productCart._id === action.payload._id ?
                    action.payload :
                    productCart
                )
                return {productsCart: cartUpdated}
            } else {
                return {productsCart: [...state.productsCart, action.payload]}
            }
        }
        default:
            return {productsCart: state.productsCart}
    }
}