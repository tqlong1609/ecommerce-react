import { IProductDetailState } from "."
import { EProductDetail } from "../action-types"
import { ActionProductDetail } from "../actions"

const initState: IProductDetailState = { isLoading: true, product: null }
export const productDetail = (state = initState, action: ActionProductDetail): IProductDetailState => {
    switch (action.type) {
        case EProductDetail.PRODUCT_DETAIL_REQUEST:
            return { isLoading: true }
        case EProductDetail.PRODUCT_DETAIL_SUCCESS:
            return { isLoading: false, product: action.payload }
        case EProductDetail.PRODUCT_DETAIL_FAIL:
            return { isLoading: false, error: action.payload }
        default:
            return state;
    }
}