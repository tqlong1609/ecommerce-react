import React from "react";
import Rating from "./Rating";

export interface IProduct {
  _id: number,
  name: string,
  category: string,
  image: string,
  price: number,
  countInStock: number,
  brand: string,
  rating: number,
  numReviewer: number,
  description: string
}

interface IProductsProps {
  product: IProduct
}

export default function Products(props: IProductsProps) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`} >
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviewer={product.numReviewer} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
