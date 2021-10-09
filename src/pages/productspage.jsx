import React from 'react'

import Categories from '../components/categories/index.jsx'
import Products from '../components/products/index.jsx'
import Error from '../components/error/index.js'

export default function ProductsPage() {
    return (
        <div className='w-screen flex justify-between flex-row p-10'>
            <Error />
            <Categories />
            <Products />
        </div>
    )
}
