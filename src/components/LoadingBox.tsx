import React from 'react'

const LoadingBox: React.FC = () => {
    return (
        // error when loading ??
        <div className="loading">
            <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
    )
}
export default LoadingBox
