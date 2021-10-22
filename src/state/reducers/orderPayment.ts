import { IOrderPaymentState } from ".";
import { EOrderDetail } from "../action-types";
import { ActionOrderPayment } from "../actions";

const initState: IOrderPaymentState = { isLoading: false }

export const orderPayment = (state = initState, action: ActionOrderPayment): IOrderPaymentState => {
    switch (action.type) {
        case EOrderDetail.GET_ORDER_PAYMENT_REQUEST:
            return { isLoading: true }
        case EOrderDetail.GET_ORDER_PAYMENT_SUCCESS:
            return { isLoading: false, isSuccess: true }
        case EOrderDetail.GET_ORDER_PAYMENT_FAIL:
            return { isLoading: false, error: action.payload }
        case EOrderDetail.GET_ORDER_PAYMENT_RESET:
            return {}
        default:
            return state
    }
}