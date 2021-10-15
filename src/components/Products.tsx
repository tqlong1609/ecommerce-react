import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export interface IProduct {
  _id: string,
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

const Products: React.FC<IProductsProps> = (props) => {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`} >
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviewer={product.numReviewer} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Products