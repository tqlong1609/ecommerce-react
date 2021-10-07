import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions";
import AlertBox from "../components/AlertBox";
import LoadingBox from "../components/LoadingBox";
import Products, { IProduct } from "../components/Products";

export interface IError {
  message: string
}

interface I { products: Array<IProduct>, isLoading: boolean, error: string }

interface IProductList {
  productList: I
}

export default function HomeScreen() {
  const state = useSelector<any>(state => state.productList)
  const dispatch = useDispatch()
  console.log('state',state);
  
  const { products, isLoading, error } = state as I
  useEffect(() => {
    dispatch(listProducts)
  }, [])
  if (!products) {
    return <div>Waiting data...</div>;
  }
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
