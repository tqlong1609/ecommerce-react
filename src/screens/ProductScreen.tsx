import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { productDetail } from "../state/actions/productList";
import { State } from '../state'
import LoadingBox from "../components/LoadingBox";
import AlertBox from "../components/AlertBox";

interface IProductScreenProps {
  match: {
    params: {
      id: string,
    }
  }
}

export default function ProductScreen(props: IProductScreenProps): React.ReactElement | null {
  const dispatch = useDispatch()
  const id = props.match.params.id
  const { isLoading, error, product } = useSelector((state: State) => state.productDetail)
  useEffect(() => {
    dispatch(productDetail(id))
  }, [])
  if (isLoading) {
    return <LoadingBox />
  } else if (error) {
    return <AlertBox variant='danger'>{error}</AlertBox>
  } else if (product) {
    return (
      <div>
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviewer={product.numReviewer}
                  />
                </li>
                <li>Price: ${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <span className="price">${product.price}</span>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
