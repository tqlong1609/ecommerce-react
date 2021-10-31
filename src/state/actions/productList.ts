import axios from 'axios';
import { Dispatch } from 'react';
import { ActionProductList } from '.';
import { IError } from "../../screens/HomeScreen";
import { EProductList } from '../action-types';

export const listProducts = (page: number, size: number) => async (dispatch: Dispatch<ActionProductList>) => {
  dispatch({
    type: EProductList.PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get(`/api/products/paging?page=${page}&size=${size}`);
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

export const getDecProducts = async (dispatch: Dispatch<ActionProductList>) => {
  dispatch({
    type: EProductList.PRODUCT_LIST_SORT_DECREASE_REQUEST,
  })
  try {
  const { data } = await axios.get("/api/products/featured");
    dispatch({
      type: EProductList.PRODUCT_LIST_SORT_DECREASE_SUCCESS,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: EProductList.PRODUCT_LIST_SORT_DECREASE_FAIL,
      payload: (error as IError).message
    })
  }
};

export const getDecLatestProducts = async (dispatch: Dispatch<ActionProductList>) => {
  dispatch({
    type: EProductList.LATEST_PRODUCT_LIST_SORT_DECREASE_REQUEST,
  })
  try {
  const { data } = await axios.get("/api/products/latest");
    dispatch({
      type: EProductList.LATEST_PRODUCT_LIST_SORT_DECREASE_SUCCESS,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: EProductList.LATEST_PRODUCT_LIST_SORT_DECREASE_FAIL,
      payload: (error as IError).message
    })
  }
};
