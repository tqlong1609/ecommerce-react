import axios from "axios";
import { Dispatch } from "react";
import { ActionOrderHistory } from ".";
import { State } from "..";
import { IError } from "../../screens/HomeScreen";
import { EOrderHistory } from "../action-types";

export const orderHistory = () => async (dispatch: Dispatch<ActionOrderHistory>, getState: () => State) => {
    const token = getState().userLogin.user?.token
    dispatch({ type: EOrderHistory.ORDER_HISTORY_REQUEST })
    try {
        const { data } = await axios.get("/api/orders/history", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        dispatch({ type: EOrderHistory.ORDER_HISTORY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: EOrderHistory.ORDER_HISTORY_FAIL, payload: (error as IError).message })
    }
}