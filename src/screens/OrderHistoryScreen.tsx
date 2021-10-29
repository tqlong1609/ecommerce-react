import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import AlertBox from '../components/AlertBox';
import LoadingBox from '../components/LoadingBox';
import { State } from '../state';
import { orderHistory } from '../state/actions/orderHistory';

export const OrderHistoryScreen: React.FC<RouteComponentProps> = (props) => {
    const dispatch = useDispatch()
    const { error, isLoading, ordersHistory } = useSelector((state: State) => state.orderHistory)

    useEffect(() => {
        dispatch(orderHistory())
    }, [])
    return (
        <div className="small-container">
            <h1>Order History</h1>
            {
                isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> :
                    <table className="table-order">
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
                                                {order.createdAt?.substring(0, 10)}
                                            </td>
                                            <td>
                                                {order.totalPrice?.toFixed(2)}
                                            </td>
                                            <td>
                                                {order.isPaid ? order.paidAt?.substring(0, 10) : 'No'}
                                            </td>
                                            <td>
                                                {order.isDelivered ? order.deliveredAt?.substring(0, 10) : 'No'}
                                            </td>
                                            <td>
                                                <a className='btn-detail' onClick={() => props.history.push(`/order/${order._id}`)}>Detail</a>
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