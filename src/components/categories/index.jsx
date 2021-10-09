import React from 'react'
import { useSelector } from 'react-redux'

export default function Categories() {
    const categories = useSelector(state => {
        const allCategories = state.products.products.map(product => product.categories).flat()
        const categoriesIds = [...new Set(allCategories.map(category => category.id))].sort((a, b) => {
            return (
                b - a
            )
        })
        const uniqueCategories = categoriesIds.map(id => {
            return(
                {
                    id: id,
                    name: allCategories.find(item => item.id === id).name
                }
            )
        })
        return uniqueCategories
    }
)


    
    if (categories && categories.length > 0) {
        return (
        <div className='w-1/4 h-screen sticky top-16'>
            <h1 className='text-xl mb-5'>Categories</h1>
            <ul className='w-full bg-gray-100 pl-5'>
            {
                categories.map(category => {
                    return(
                        <li key={category.id} className='pt-1 pb-1' >
                            <a className='outline-none hover:border-gray-700 '>{category.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        </div>
        
    )} else {
        return (<div>Loading...</div>)
    }
}
