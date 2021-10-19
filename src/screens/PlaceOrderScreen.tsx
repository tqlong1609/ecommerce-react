import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import AlertBox from '../components/AlertBox';
import { CheckoutSteps } from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import { State } from '../state';
import { clearOrder, createPlaceOrder } from '../state/actions/placeOrder';

const toPrice = (num: number): number => {
    return +num.toFixed(2)
}

const TAX = 0.15
const MAX_SHIPPING = 100
const SHIPPING_PRICE = 10

export const PlaceOrderScreen: React.FC<RouteComponentProps> = (props) => {
    const cart = useSelector((state: State) => state.cartProducts)
    const { error, isLoading, isSuccess, order } = useSelector((state: State) => state.orderPlace)

    if (!cart.paymentMethod) {
        props.history.push('/payment')
    }
    cart.itemPrice = toPrice(cart.productsCart.reduce((sum, product) => {
        return sum + product.qty * product.price
    }, 0))
    cart.shippingPrice = cart.itemPrice < MAX_SHIPPING ? SHIPPING_PRICE : 0
    cart.taxPrice = TAX * cart.itemPrice
    cart.totalPrice = cart.itemPrice + cart.shippingPrice + cart.taxPrice
    const dispatch = useDispatch()
    const onClickOrder = () => {
        dispatch(createPlaceOrder({ ...cart, orderItems: cart.productsCart }))
    }
    useEffect(() => {
        if (isSuccess) {
            props.history.push(`/order/${order?._id}`)
            dispatch(clearOrder())
        }
    }, [isSuccess])
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
                                    {cart.shippingAddress?.postalCode}, {cart.shippingAddress?.city}
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
                                    <div className="price">${cart.itemPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div className="price">${cart.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div className="price">${cart.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong>Order Total</strong>
                                    </div>
                                    <div className="price"><strong> ${cart.totalPrice.toFixed(2)}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button className={`primary block ${cart.productsCart.length === 0 && 'disabled'}`}
                                    disabled={cart.productsCart.length === 0}
                                    onClick={onClickOrder}
                                >
                                    Place Order</button>
                                {isLoading && <LoadingBox />}
                                {error && <AlertBox variant="danger">{error}</AlertBox>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}