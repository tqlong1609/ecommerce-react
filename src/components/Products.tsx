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
  description: string,
  smallImages?: string[]
}

interface IProductsProps {
  product: IProduct,
  numReviewer?: number
}

const Products: React.FC<IProductsProps> = (props) => {
  const { product } = props;
  return (
    <div className="col-4">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={`product-${product._id}`} />
        <h4>{product.name}</h4>
        <Rating rating={product.rating} />
        <p>${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}

export default Products