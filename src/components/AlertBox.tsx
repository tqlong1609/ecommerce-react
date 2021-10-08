import React from 'react'

interface IAlertBoxProps {
    children: React.ReactChild,
    variant?: string
}

export default function AlertBox(props: IAlertBoxProps): React.ReactElement {
    const {children, variant} = props
    return (
        <div className={`alert alert-${variant || 'info'}`}>
            {children}
        </div>
    )
}
