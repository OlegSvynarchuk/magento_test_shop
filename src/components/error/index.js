import React from 'react'
import { useSelector } from 'react-redux'

export default function Error() {
    const errorMessage = useSelector(state => state.products.error)
    if(errorMessage) {
        return (
        <div>
            <h1 className="text-red">
                {errorMessage}
            </h1>
        </div>
    )
} return null
}

