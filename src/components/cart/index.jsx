
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from '../../redux/cartSlice'


export default function Cart() {
    
    
    const dispatch = useDispatch()
    
    const items = useSelector(
           state => Object.keys(state.cart).map(sku => {
               return (
                   state.cart[sku]
               )
           })
    )
    
    return (
<div>
    {items.length === 0 && <div className='flex items-center justify-center h-screen text-3xl'>Cart is empty</div>}
    {items.length > 0 &&  <div className='w-2/5'>
            <h2 className='mt-20 ml-12 text-2xl'>Cart</h2>
            {items.map(item => {
            return(
                <div key={item.sku} className=' flex justify-between ml-14 py-5'>
                    
                    <div className='flex items-center mr-10'><button onClick={()=> {dispatch(removeFromCart(item.sku))}}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                    </div>
                    <div>
                        <img width='180px' src={`https://mcus.ecg.magento.com/media/catalog/product${item.image}`}/>
                    </div>
                    <div className="flex items-center w-full text-left">{item.name}</div>
                    
                    <div className='flex items-center space-x-1 w-100 '>
                        <button onClick={() => dispatch(increaseItemQuantity(item.sku))}
                        className='border-solid border-2 border-black w-6'>
                            +
                        </button>
                            <span>{item.quantity}</span>
                        <button onClick={() => dispatch(decreaseItemQuantity(item.sku))}
                        className='border-solid border-2 border-black w-6'>
                            -
                        </button>
                    </div>
                </div>
            )
        })}
        
        <div>
          <button onClick={()=> dispatch(clearCart())}
            className='border-solid border-2 border-black p-2 float-right'>
              Clear cart
          </button>
        </div>    
        </div>}
    </div>
    )
}
