import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div>
            <Loader
                type="ThreeDots"
                color="#3498db"
                height={100}
                width={100}
                timeout={3000} 
            />
        </div>
    )
}
