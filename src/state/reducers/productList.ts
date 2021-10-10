import { ActionProductList } from "../actions";
import { IProductListState } from ".";
import { EProductList } from '../action-types'

const initState: IProductListState = { isLoading: true, products: [] }

export const productList = (
  state: IProductListState = initState,
  action: ActionProductList
): IProductListState => {
  switch (action.type) {
    case EProductList.PRODUCT_LIST_REQUEST:
      return { isLoading: true };
    case EProductList.PRODUCT_LIST_SUCCESS:
      return { isLoading: false, products: action.payload };
    case EProductList.PRODUCT_LIST_FAIL:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};
