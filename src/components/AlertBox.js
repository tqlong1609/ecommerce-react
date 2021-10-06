import React from 'react'

export default function AlertBox(props) {
    const {children, variant} = props
    return (
        <div className={`alert alert-${variant || 'info'}`}>
            {children}
        </div>
    )
}
