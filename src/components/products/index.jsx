

import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsAsync } from '../../redux/productsSlice'
import { addToCart } from '../../redux/cartSlice'


export default function Products() {

    const [token, setToken] = useState(null)

    const dispatch = useDispatch()
    
    const productList = useSelector(state => {
        return (state.products.products)
    })

    const cartItemsIds = useSelector(state => {
        return Object.keys(state.cart)
    })

    

    useEffect(() => {
        const tokenInfo = JSON.parse(localStorage.getItem('token')) 
        if(tokenInfo) {
            const {token, time} = tokenInfo
            let milisecondsDifference = Math.abs((Date.now()) - (new Date(time).getTime()))
            let hours = milisecondsDifference / 3600000
            if(token && hours < 4) {
                setToken(token)
            }
            else {
                setToken('')
            }
        }
        else {
            setToken('')
        }
    }, [])


  
    
    useEffect(() => {
        if(token !== null)
        
        dispatch(loadProductsAsync(token))
        .unwrap()
        .then(res => {
            if(res.token) {
                localStorage.setItem('token', JSON.stringify({token:res.token, time: new Date() }))
            }
        }).catch(error => console.log(error))
        }, 
    [token])

  

    

    
    

    return (
        <>
        {productList.length > 0  && 
        <ul className="w-3/4 grid grid-cols-4 gap-10" >{productList.map(product => {
          const isItemInCart = cartItemsIds.includes(product.sku)
          const buttonBackground = isItemInCart ? `bg-purple-500 cursor-not-allowed hover:bg-purple-500`: `bg-green-400`  
          
          return (
              <li key={product.sku} className='text-center'>
                  <div>
                        <img className='w-full object-center 'src={`https://mcus.ecg.magento.com/media/catalog/product${product.image}`} />
                        <h4 className='w-full py-2'>{product.name}</h4>
                        <button 
                        className={`hover:bg-green-700 text-white py-1 px-2 rounded ${buttonBackground}`}
                        onClick={() => dispatch(addToCart(product))}
                        disabled={isItemInCart}
                        >
                            {isItemInCart ? "In cart" : "Add to cart"}
                        </button>
                  </div>
              </li>
          )
      })}
      </ul>
      
      
      }
      </>
    )
}
