import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../state/actions";
import AlertBox from "../components/AlertBox";
import LoadingBox from "../components/LoadingBox";
import Products from "../components/Products";
import { IProductListState, State } from '../state'
export interface IError {
  message: string
}

export default function HomeScreen(): React.ReactElement {
  const state = useSelector((state: State) => state.productList)

  const dispatch = useDispatch()
  const { products = [], isLoading, error } = state as IProductListState

  useEffect(() => {
    dispatch(listProducts)
  }, [])

  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <AlertBox variant="info">{error}</AlertBox>
      ) : (
        <main className="row center">
          {products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </main>
      )}
    </div>
  );
}
