import { EOrderDetail } from "../action-types";
import { ActionOrderDetail } from "../actions";
import { IPlaceOrderPostingResponse } from "../actions/placeOrder";

interface IOrderDetailState {
    isLoading: boolean,
    order?: IPlaceOrderPostingResponse,
    error?: string
}

const initState: IOrderDetailState = { isLoading: false }

export const orderDetail = (state = initState, action: ActionOrderDetail): IOrderDetailState => {
    switch (action.type) {
        case EOrderDetail.GET_ORDER_REQUEST:
            return { isLoading: true }
        case EOrderDetail.GET_ORDER_SUCCESS:
            return { isLoading: false, order: action.payload }
        case EOrderDetail.GET_ORDER_FAIL:
            return { isLoading: false, error: action.payload }
        default:
            return state
    }
}