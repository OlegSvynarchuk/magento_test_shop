import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='w-screen flex justify-start items-center sticky top-0 z-50 p-10 bg-gray-300'>
            <h1 className='text-4xl h-full'>MAGENTOSHOP</h1>
            <nav className='ml-10 w-1/7 h-full flex justify-between items-center text-blue-600'>
                <Link className='p-2 hover:text-purple-600' to='/'>Products</Link>
                <Link className='p-2 hover:text-purple-600' to='/cart'>Cart</Link>
            </nav>
        </div>
    )
}
