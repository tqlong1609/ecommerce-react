import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { State } from '../state'
import { addCartItem, removeCartItem } from '../state/actions/cartItems'

const TAX = 0.15
const CartScreen: React.FC<RouteComponentProps> = (props) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state: State) => state.cartProducts)
    const { user } = useSelector((state: State) => state.userLogin)
    const { productsCart } = cartProducts

    const changeQty = (productID: string, size: string, value: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addCartItem(productID, +value.target.value, size))
    }
    const onDeleteProduct = (productID: string) => {
        dispatch(removeCartItem(productID))
    }
    const onCLickCheckout = () => {
        if (productsCart.length > 0) {
            props.history.push(!user ? '/signin?redirect=shipping' : '/shipping')
        }
    }

    useEffect(() => {
        if (productsCart.length <= 0) {
            props.history.goBack()
        }
    }, [productsCart])

    return (
        <Fragment>
            <div className="small-container products-cart">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {
                        productsCart.map(product => {
                            return (
                                <tr key={product._id}>
                                    <td>
                                        <div className="product-row">
                                            <img src={product.image} alt="gallery-1" />
                                            <div className="product-info">
                                                <Link to={`/product/${product._id}`}>
                                                    <h4>{product.name}</h4>
                                                </Link>
                                                <p>Price: ${product.price.toFixed(2)}</p>
                                                <span className="remove" onClick={() => onDeleteProduct(product._id)}>Remove</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="right">
                                        <input type="number" value={product.qty} min="1"
                                            onChange={e => changeQty(product._id, product.size, e)} />
                                    </td>
                                    <td className="right">
                                        <h4>${product.price * product.qty}</h4>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>

                <div className="total-product">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>${productsCart.reduce((s, product) => s + product.qty * product.price, 0).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${TAX}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${(productsCart.reduce((s, product) => s + product.qty * product.price, 0) + TAX).toFixed(2)}</td>
                        </tr>
                    </table>
                </div>
                <div className="btn-checkout">
                    <button className="btn square-o" onClick={onCLickCheckout}>Process to Checkout</button>
                </div>
            </div>
        </Fragment>
    );
}

export default CartScreen