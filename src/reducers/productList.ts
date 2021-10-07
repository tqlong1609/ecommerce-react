import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productList";
import { IProduct } from '../components/Products'
import { IAction } from "../actions/productList";

export interface IProductListStore {
  loading: boolean,
  products?: IProduct | []
}

export const productList = (
  state: IProductListStore = { loading: true, products: [] },
  action: IAction
): IProductListStore => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, products: action.payload };
    default:
      return state;
  }
};
