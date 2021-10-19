import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { State } from '../state';
import { savePaymentMethod } from '../state/actions/cartItems';

export enum EPaymentMethod {
    PAYPAL = "PAYPAL",
    STRIPE = 'STRIPE'
}

export const PaymentScreen: React.FC<RouteComponentProps> = (props) => {
    const { shippingAddress } = useSelector((state: State) => state.cartProducts)
    if(!shippingAddress) {
        props.history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState<EPaymentMethod>(EPaymentMethod.PAYPAL)
    const dispatch = useDispatch()
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        props.history.push('/placeorder')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Payment Method</h2>
                </div>
                <div>
                    <div>
                        <input type="radio" name="paymentMethod" id="paypal" value={'PAYPAL'}
                            checked={paymentMethod === EPaymentMethod.PAYPAL ? true : false} required
                            onChange={e => setPaymentMethod(e.target.value as EPaymentMethod)} />
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" name="paymentMethod"
                            checked={paymentMethod === EPaymentMethod.PAYPAL ? false : true} id="stripe" value={'STRIPE'} required
                            onChange={e => setPaymentMethod(e.target.value as EPaymentMethod)} />
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <button className="primary block" type="submit">Continue</button>
            </form>
        </div>
    );
}