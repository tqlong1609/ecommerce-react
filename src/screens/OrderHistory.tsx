import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import AlertBox from '../components/AlertBox';
import LoadingBox from '../components/LoadingBox';
import { State } from '../state';
import { orderHistory } from '../state/actions/orderHistory';

export const OrderHistory: React.FC<RouteComponentProps> = (props) => {
    const dispatch = useDispatch()
    const { error, isLoading, ordersHistory } = useSelector((state: State) => state.orderHistory)
    useEffect(() => {
        dispatch(orderHistory())
    }, [])
    return (
        <div>
            <h1>Order History</h1>
            {
                isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> :
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordersHistory?.map(order => {
                                    return (
                                        <tr key={order._id}>
                                            <td>
                                                {order._id}
                                            </td>
                                            <td>
                                                {order.isPaid ? order.paymentResult?.time_update : 'No'}
                                            </td>
                                            <td>
                                                {order.totalPrice}
                                            </td>
                                            <td>
                                                {order.isPaid ? 'Yes' : 'No'}
                                            </td>
                                            <td>
                                                {order.isDelivered ? 'Yes' : 'No'}
                                            </td>
                                            <td>
                                                <button onClick={() => props.history.push(`/order/${order._id}`)}>
                                                    Action
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>}
        </div>
    );
}