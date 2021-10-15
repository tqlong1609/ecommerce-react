import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { addCartItem, removeCartItem } from '../state/actions/cartItems'
import { State } from '../state'
import AlertBox from '../components/AlertBox'
import { Link } from 'react-router-dom'

interface IMatchProps {
    id: string,
}

const CartScreen: React.FC<RouteComponentProps<IMatchProps>> = (props) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state: State) => state.cartProducts)
    const { productsCart } = cartProducts

    const changeQty = (productID: string, value: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(addCartItem(productID, +value.target.value))
    }

    const onDeleteProduct = (productID: string) => {
        dispatch(removeCartItem(productID))
    }

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {
                    productsCart.length > 0 ? (
                        <ul>
                            {
                                productsCart.map(product => {
                                    return (
                                        <li key={product._id} className="row">
                                            <div>
                                                <img className="small" src={product.image} alt={product.name} />
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/product/${product._id}`}>{product.name}</Link>
                                            </div>
                                            <div>
                                                <select value={product.qty}
                                                    onChange={e => changeQty(product._id, e)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(item => {
                                                            return (
                                                                <option key={item} value={item + 1}>{item + 1}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div>
                                                ${product.price}
                                            </div>
                                            <div>
                                                <button onClick={() => onDeleteProduct(product._id)}>Delete</button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ) : <AlertBox variant='info'>Cart is empty <Link to="/">Go Shopping</Link></AlertBox>
                }

            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal: ({productsCart.reduce((sum: number, e) => sum + e.qty, 0)} items) : ${productsCart.reduce((price, e2) => price + e2.qty * e2.price, 0)}
                            </h2>
                        </li>
                        <li>
                            <button className={`primary block ${productsCart.length <= 0 && 'disabled'}`}>Proceed to Checkout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartScreen