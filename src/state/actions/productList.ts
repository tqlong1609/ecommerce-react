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

