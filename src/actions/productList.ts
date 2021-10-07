import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productList";
import { IError } from "../screens/HomeScreen";

export interface IAction {
  type: string,
  payload?: any
}

export type TDispatch = (data: IAction) => void

export const listProducts = async (dispatch: TDispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: (error as IError).message });
  }
};
