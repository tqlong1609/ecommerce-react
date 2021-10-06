import React from 'react'

interface IAlertBoxProps {
    children: any,
    variant?: string
}

export default function AlertBox(props: IAlertBoxProps) {
    const {children, variant} = props
    return (
        <div className={`alert alert-${variant || 'info'}`}>
            {children}
        </div>
    )
}
