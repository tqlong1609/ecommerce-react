import axios from "axios"
import { Dispatch } from "react";
import { ActionCartProduct } from ".";
import { State } from "..";
import { IProduct } from "../../components/Products";
import { PRODUCT_CART_ITEM_KEY } from "../../constants";
import { ECartItems } from "../action-types/cartItems";

export const addCartItem
    = (productId: string, qty: number) => async (dispatch: Dispatch<ActionCartProduct>, getState: () => State) => {
        const { data } = await axios.get(`/api/products/${productId}`)
        const product = data as IProduct
        dispatch({ type: ECartItems.ADD_PRODUCT_CART, payload: { ...product, qty } })

        // add to localStorage
        localStorage.setItem(PRODUCT_CART_ITEM_KEY, JSON.stringify(getState().cartProducts.productsCart))
    }

export const removeCartItem = (productId: string) => async (dispatch: Dispatch<ActionCartProduct>, getState: () => State) => {
    dispatch({ type: ECartItems.REMOVE_PRODUCT_CART, payload: { productId } })
    localStorage.setItem(PRODUCT_CART_ITEM_KEY, JSON.stringify(getState().cartProducts.productsCart))
}