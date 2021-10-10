import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { productDetail } from "../state/actions/productList";
import { State } from '../state'
import LoadingBox from "../components/LoadingBox";
import AlertBox from "../components/AlertBox";
import {RouteComponentProps} from 'react-router'

interface IMatchParams {
  id: string
}

export default function ProductScreen(props: RouteComponentProps<IMatchParams>): React.ReactElement | null {
  const dispatch = useDispatch()
  const id = props.match.params.id
  const { isLoading, error, product } = useSelector((state: State) => state.productDetail)
  const [valueQty, setValueQty] = useState<number>(1)
  useEffect(() => {
    dispatch(productDetail(id))
  }, [])

  const changeQty = (value: React.ChangeEvent<HTMLSelectElement>) => {
    setValueQty(+value.target.value)
  }

  const onClickAddToCart = () => {
    props.history.push(`/cart/${id}?qty=${valueQty}`)
  }

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
                  {
                    product.countInStock > 0 && (
                      <>
                        <li className="row">
                          <div>Qty</div>
                          <select value={valueQty} onChange={changeQty}>
                            {
                              [...Array(product.countInStock).keys()].map(item => (
                                <option key={item} value={item + 1}>{item + 1}</option>
                              ))
                            }
                          </select>
                        </li>
                        <li>
                          <button className="primary block" onClick={onClickAddToCart}>Add to Cart</button>
                        </li>
                      </>
                    )
                  }
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
