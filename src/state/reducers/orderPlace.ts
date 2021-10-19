import { IOrderPlaceState, State } from ".";
import { EPlaceOrder } from "../action-types";
import { ActionPlaceOrder } from "../actions";

const initState: IOrderPlaceState = { isLoading: false }

export const orderPlace = (state = initState, action: ActionPlaceOrder): IOrderPlaceState => {
    switch (action.type) {
        case EPlaceOrder.PLACE_ORDER_REQUEST:
            return { isLoading: true }
        case EPlaceOrder.PLACE_ORDER_SUCCESS:
            return { isLoading: false, order: action.payload, isSuccess: true }
        case EPlaceOrder.PLACE_ORDER_FAIL:
            return { isLoading: false, error: action.payload }
        case EPlaceOrder.PLACE_ORDER_RESET:
            return {}
        default:
            return state
    }
}