import axios from "axios"
import { Dispatch } from "react"
import { ActionProductDetail, IErrorResponse } from "."
import { EProductDetail } from "../action-types"

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
  