import axios from "axios"
import { Dispatch } from "react";
import { IProductAddToCart } from ".";
import { State } from "..";
import { IProduct } from "../../components/Products";
import { PRODUCT_CART_ITEM_KEY } from "../../constants";
import { ECartItems } from "../action-types/cartItems";

export const addCartItem
    = (productId: number, qty: number) => async (dispatch: Dispatch<IProductAddToCart>, getState: () => State) => 
    {
        const { data } = await axios.get(`/api/products/${productId}`)
        const product = data as IProduct
        dispatch({ type: ECartItems.ADD_PRODUCT_CART, payload: { ...product, qty } })

        // add to localStorage
        localStorage.setItem(PRODUCT_CART_ITEM_KEY, JSON.stringify(getState().cartProducts.productsCart))
    }