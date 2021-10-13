import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { addCartItem } from '../state/actions/cartItems'

interface IMatchProps {
    id: string,
}

export default function CartScreen(props: RouteComponentProps<IMatchProps>) {
    const id = props.match.params.id
    const qty = props.location.search ? props.location.search.split('=')[1] : 2
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addCartItem(+id, +qty))
    }, [dispatch, id, qty])
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CARD : PRODUCT ID: {id} - {qty}</p>
        </div>
    )
}
