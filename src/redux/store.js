import { configureStore } from "@reduxjs/toolkit";

import productReducer from './productsSlice'
import cartReducer from './cartSlice'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(err) {
        return undefined
    }
}

const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('cart', serializedState)
    } catch(err) {
        return undefined
    }
}
const persistedState = loadState()

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
       
    },
    preloadedState: persistedState

})

store.subscribe(() => {
    saveState({
        cart: store.getState().cart
    })
})

export default store