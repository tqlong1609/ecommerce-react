import { EOrderHistory } from "../action-types";
import { ActionOrderHistory } from "../actions";
import { IPlaceOrderPostingResponse } from "../actions/placeOrder";

interface IOrderHistoryState {
    isLoading: boolean,
    error?: string,
    ordersHistory?: Array<IPlaceOrderPostingResponse>
}

const initState: IOrderHistoryState = { isLoading: false }

export const orderHistory = (state = initState, action: ActionOrderHistory): IOrderHistoryState => {
    switch (action.type) {
        case EOrderHistory.ORDER_HISTORY_REQUEST:
            return { isLoading: true }
        case EOrderHistory.ORDER_HISTORY_SUCCESS:
            return { isLoading: false, ordersHistory: action.payload }
        case EOrderHistory.ORDER_HISTORY_FAIL:
            return { isLoading: false, error: action.payload }
        default:
            state;
    }
    return state
}