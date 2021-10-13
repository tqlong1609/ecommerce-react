import axios from "axios"
import { Dispatch } from "react";
import { IProductAddToCart } from ".";
import { IProduct } from "../../components/Products";
import { ECartItems } from "../action-types/cartItems";

export const addCartItem = (productId: number, qty: number) => async (dispatch: Dispatch<IProductAddToCart>) => {
    const { data } = await axios.get(`/api/products/${productId}`)
    const product = data as IProduct
    dispatch({ type: ECartItems.ADD_PRODUCT_CART, payload: { ...product, qty } })
}