import React from 'react'

interface CheckoutStepsProps {
    step1?: boolean,
    step2?: boolean,
    step3?: boolean,
    step4?: boolean,
}

export const CheckoutSteps: React.FC<CheckoutStepsProps> = (props) => {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Sign In</div>
            <div className={props.step2 ? 'active' : ''}>Shipping</div>
            <div className={props.step3 ? 'active' : ''}>Payment</div>
            <div className={props.step4 ? 'active' : ''}>Place Order</div>
        </div>
    );
}