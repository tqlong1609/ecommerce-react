import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { ActionProductDetail, ActionProductList, IErrorResponse } from '.';
import { IError } from "../../screens/HomeScreen";
import { EProductDetail, EProductList } from '../action-types';

export const listProducts = async (dispatch: Dispatch<ActionProductList>) => {
  dispatch({
    type: EProductList.PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get("/api/products");
    dispatch({
      type: EProductList.PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: EProductList.PRODUCT_LIST_FAIL,
      payload: (error as IError).message
    })
  }
};

export const productDetail = (productID: string) => async (dispatch: Dispatch<ActionProductDetail>) => {
  dispatch({
    type: EProductDetail.PRODUCT_DETAIL_REQUEST
  })

  try {
    const { data } = await axios.get(`/api/products/${productID}`)
    dispatch({ type: EProductDetail.PRODUCT_DETAIL_SUCCESS, payload: data })
  } catch (error: unknown) {
    const e = error as IErrorResponse
    dispatch({
      type: EProductDetail.PRODUCT_DETAIL_FAIL,
      payload: e.response.status === 404 ?
        e.response.data.message :
        (error as Error).message
    })
  }
}
