import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { State } from '../state';
import { saveShippingAddress } from '../state/actions/cartItems';

export const ShippingAddressScreen: React.FC<RouteComponentProps> = (props) => {
    const { user } = useSelector((state: State) => state.userLogin)
    const { shippingAddress } = useSelector((state: State) => state.cartProducts)
    if (!user) {
        props.history.push('/signin?=shipping')
    }
    const [name, setName] = useState<string | undefined>(shippingAddress?.name)
    const [address, setAddress] = useState<string | undefined>(shippingAddress?.address)
    const [city, setCity] = useState<string | undefined>(shippingAddress?.city)
    const [country, setCountry] = useState<string | undefined>(shippingAddress?.country)
    const [postalCode, setpostalCode] = useState<number>(shippingAddress?.postalCode || 0)
    const dispatch = useDispatch()
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name && address && city && country && postalCode) {
            dispatch(saveShippingAddress({ name, address, city, country, postalCode }))
            props.history.push('/payment')
        }
    }

    return (
        <div>
            <CheckoutSteps step1 step2 />
            <form onSubmit={onSubmit} className="form">
                <h2>Shipping Address</h2>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter full name"
                        value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"
                        placeholder="Enter address"
                        value={address} onChange={e => setAddress(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city"
                        placeholder="Enter city"
                        value={city} onChange={e => setCity(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="postal_code">Postal Code</label>
                    <input type="number" name="postal_code" id="postal_code"
                        value={postalCode + ''} onChange={e => setpostalCode(+e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country"
                        placeholder="Enter country"
                        value={country} onChange={e => setCountry(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <button name="location" id="location" className="primary choose_map">Choose On Map</button>
                </div>
                <button type="submit" className="primary block">Continue</button>
            </form>
        </div>
    );
}