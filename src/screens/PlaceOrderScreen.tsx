import React from 'react'
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { State } from '../state';

const toPrice = (num: number): number => {
    return +num.toFixed(2)
}

const TAX = 0.15
const MAX_SHIPPING = 100
const SHIPPING_PRICE = 10

export const PlaceOrderScreen: React.FC<RouteComponentProps> = (props) => {

    const cart = useSelector((state: State) => state.cartProducts)
    if (!cart.paymentMethod) {
        props.history.push('/payment')
    }
    const itemsPrice = cart.productsCart.reduce((sum, product) => {
        return sum + product.qty * product.price
    }, 0)
    const shippingPrice = toPrice(itemsPrice) < MAX_SHIPPING ? SHIPPING_PRICE : 0
    const taxPrice = TAX * itemsPrice
    const orderTotalPrice = itemsPrice + shippingPrice + taxPrice
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong> {cart.shippingAddress?.name} <br />
                                    <strong>Address: </strong> {cart.shippingAddress?.address}, {cart.shippingAddress?.country},
                                    {cart.shippingAddress?.postCode}, {cart.shippingAddress?.city}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method: </strong> {cart.paymentMethod} <br />
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                {
                                    cart.productsCart.map(product => {
                                        return (
                                            <li key={product._id} className="row">
                                                <div>
                                                    <img className="small" src={product.image} alt={product.name} />
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                                                </div>
                                                <div>
                                                    {product.qty} x ${product.price} = ${product.qty * product.price}
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div className="price">${itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div className="price">${shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div className="price">${taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong>Order Total</strong>
                                    </div>
                                    <div className="price"><strong> ${orderTotalPrice.toFixed(2)}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button className={`primary block ${cart.productsCart.length === 0 && 'disabled'}`}
                                    disabled={cart.productsCart.length === 0}>
                                    Place Order</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}