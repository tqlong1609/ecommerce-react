import React from 'react'
import { RouteComponentProps } from 'react-router'

interface IMatchProps {
    id: string,
}

export default function CartScreen(props: RouteComponentProps<IMatchProps>) {
    const id = props.match.params.id
    const qty = props.location.search ? props.location.search.split('=')[1] : 2
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CARD : PRODUCT ID: {id} - {qty}</p>
        </div>
    )
}
