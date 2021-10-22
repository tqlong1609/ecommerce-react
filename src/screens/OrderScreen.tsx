import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import AlertBox from '../components/AlertBox';
import LoadingBox from '../components/LoadingBox';
import { State } from '../state';
import { getOrderById } from '../state/actions/placeOrder';

interface OrderScreenProps {
    id: string
}

// Importance
declare global {
    interface Window {
        paypal: any
    }
}

export const OrderScreen: React.FC<RouteComponentProps<OrderScreenProps>> = (props) => {
    const dispatch = useDispatch()
    const { isLoading, error, order } = useSelector((state: State) => state.orderDetail)
    const [isSdkPaypal, setIsSdkPaypal] = useState<boolean>(false)
    const id = props.match.params.id

    const handleSuccess = () => {
        console.log('handle success');
    }
    useEffect(() => {
        const getPayPalSDKClientId = async () => {
            const { data } = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
            script.async = true
            document.body.appendChild(script)
        }
        if (!order?._id) {
            dispatch(getOrderById(id))
        } else {
            if (!order.isPaid) {
                if (!window?.paypal) {
                    getPayPalSDKClientId()
                } else {
                    setIsSdkPaypal(true)
                }
            }
        }
    }, [dispatch, id, isSdkPaypal, order])
    if (!order) {
        return null
    }
    return (
        <div>
            {isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> : <div>
                <h2>Order {order?._id}</h2>
                <div className="row top">
                    <div className="col-2">
                        <ul>
                            <li>
                                <div className="card card-body">
                                    <h2>Shipping</h2>
                                    <p>
                                        <strong>Name: </strong> {order?.shippingAddress?.name} <br />
                                        <strong>Address: </strong> {order?.shippingAddress?.address}, {order?.shippingAddress?.country},
                                        {order?.shippingAddress?.postalCode}, {order?.shippingAddress?.city}
                                    </p>
                                    {order.isDelivered ? <AlertBox variant="info">Delivered</AlertBox> : <AlertBox variant="danger">Not Delivered</AlertBox>}
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Payment</h2>
                                    <p>
                                        <strong>Method: </strong> {order?.paymentMethod} <br />
                                    </p>
                                    {order.isPaid ? <AlertBox variant="info">Paid</AlertBox> : <AlertBox variant="danger">Not Paid</AlertBox>}
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Order Items</h2>
                                    {
                                        order?.orderItems?.map(product => {
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
                                        <div className="price">${order?.itemPrice?.toFixed(2)}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Shipping</div>
                                        <div className="price">${order?.shippingPrice?.toFixed(2)}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Tax</div>
                                        <div className="price">${order?.taxPrice?.toFixed(2)}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>
                                            <strong>Order Total</strong>
                                        </div>
                                        <div className="price"><strong> ${order?.totalPrice?.toFixed(2)}</strong></div>
                                    </div>
                                </li>
                                {
                                    !order.isPaid && (
                                        <li>
                                            {
                                                !isSdkPaypal ? <LoadingBox /> : <PayPalButton amount={order.totalPrice} onSuccess={handleSuccess} />
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}