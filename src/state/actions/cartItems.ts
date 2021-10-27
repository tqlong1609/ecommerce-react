import axios from "axios"
import { Dispatch } from "react";
import { ActionCartProduct } from ".";
import { State } from "..";
import { IProduct } from "../../components/Products";
import { PRODUCT_CART_ITEM_KEY } from "../../constants";
import { SHIPPING_ADDRESS_KEY } from "../../constants/localStorage";
import { EPaymentMethod } from "../../screens/PaymentScreen";
import { ECartItems } from "../action-types/cartItems";

export interface IShippingAddress {
    name: string,
    address: string,
    city: string,
    country: string,
    postalCode: number
}

export const addCartItem
    = (productId: string, qty: number, size: string) => async (dispatch: Dispatch<ActionCartProduct>, getState: () => State) => {
        const { data } = await axios.get(`/api/products/${productId}`)
        const product = data as IProduct
        dispatch({ type: ECartItems.ADD_PRODUCT_CART, payload: { ...product, qty, size } })

        // add to localStorage
        localStorage.setItem(PRODUCT_CART_ITEM_KEY, JSON.stringify(getState().cartProducts.productsCart))
    }

export const removeCartItem = (productId: string) => async (dispatch: Dispatch<ActionCartProduct>, getState: () => State) => {
    dispatch({ type: ECartItems.REMOVE_PRODUCT_CART, payload: { productId } })
    localStorage.setItem(PRODUCT_CART_ITEM_KEY, JSON.stringify(getState().cartProducts.productsCart))
}

export const saveShippingAddress = (data: IShippingAddress) => (dispatch: Dispatch<ActionCartProduct>) => {
    dispatch({ type: ECartItems.SHIPPING_ADDRESS, payload: data })
    localStorage.setItem(SHIPPING_ADDRESS_KEY, JSON.stringify(data))
}

export const savePaymentMethod = (method: EPaymentMethod) => (dispatch: Dispatch<ActionCartProduct>) => {
    dispatch({ type: ECartItems.PAYMENT_METHOD, payload: method })
}