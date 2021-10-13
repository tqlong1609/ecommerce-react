import React from 'react'

interface IAlertBoxProps {
    children: React.ReactChild | (string | JSX.Element)[],
    variant?: 'danger' | 'info'
}

const AlertBox: React.FC<IAlertBoxProps> = (props) => {
    const { children, variant } = props
    return (
        <div className={`alert alert-${variant || 'info'}`}>
            {children}
        </div>
    )
}

export default AlertBox