import axios from "axios";
import { Dispatch } from "react";
import { ActionCartProduct, ActionPlaceOrder, IErrorResponse } from ".";
import { IProductCart, State } from "..";
import { PRODUCT_CART_ITEM_KEY } from "../../constants";
import { EPlaceOrder } from "../action-types";
import { ECartItems } from "../action-types/cartItems";
import { IProductCartState } from "../reducers/cartItem";

interface IPlaceOrderPosting extends IProductCartState {
    orderItems: Array<IProductCart>,
}

export interface IPlaceOrderPostingResponse extends IPlaceOrderPosting {
    isDelivered: boolean,
    isPaid: boolean,
    _id: string
}

export const createPlaceOrder = (order: IPlaceOrderPosting) => async (dispatch: Dispatch<ActionPlaceOrder | ActionCartProduct>, getState: () => State) => {
    const { userLogin: { user } } = getState()
    dispatch({ type: EPlaceOrder.PLACE_ORDER_REQUEST })
    try {
        if (user?.token) {
            const { data } = await axios.post('/api/orders', order, {
                headers: {
                    Authorization: 'Bearer ' + user?.token
                },
            })
            dispatch({ type: EPlaceOrder.PLACE_ORDER_SUCCESS, payload: data as IPlaceOrderPostingResponse })
            dispatch({ type: ECartItems.CART_EMPTY })
            localStorage.removeItem(PRODUCT_CART_ITEM_KEY)
        }

    } catch (error) {
        const e = error as IErrorResponse
        dispatch({
            type: EPlaceOrder.PLACE_ORDER_FAIL,
            payload: e.response.status ?
                e.response.data.message :
                (error as Error).message
        })
    }
}

export const clearOrder = () => (dispatch: Dispatch<ActionPlaceOrder>) => {
    dispatch({ type: EPlaceOrder.PLACE_ORDER_RESET })
}