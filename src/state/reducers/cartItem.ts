import { IProductCart } from "."
import { ECartItems } from "../action-types/cartItems";
import { ActionCartProduct } from '../actions'

interface IProductCartState {
    productsCart: Array<IProductCart>
}

const initState: IProductCartState = { productsCart: [] }

const isExistInArray = (arrayProduct: Array<IProductCart>, product: IProductCart): boolean => {
    return arrayProduct.find(item => item._id === product._id) ? true : false
}

export const productsCart = (state = initState, action: ActionCartProduct): IProductCartState => {
    switch (action.type) {
        case ECartItems.ADD_PRODUCT_CART: {
            if (state.productsCart?.length > 0 && isExistInArray(state.productsCart, action.payload)) {
                const cartUpdated = state.productsCart.map(productCart => productCart._id === action.payload._id ?
                    action.payload :
                    productCart
                )
                return { ...state, productsCart: cartUpdated }
            } else {
                return { ...state, productsCart: [...state.productsCart, action.payload] }
            }
        }
        case ECartItems.REMOVE_PRODUCT_CART: {
            const cartUpdated = state.productsCart.filter(product => product._id !== action.payload.productId)
            return { ...state, productsCart: cartUpdated }
        }
        default:
            return { ...state, productsCart: state.productsCart }
    }
}