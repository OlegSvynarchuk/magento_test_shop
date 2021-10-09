import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
      
    },

    reducers: {
      addToCart: (state, action) => {
       if(!state[action.payload.id]) {
         return {...state, [action.payload.sku]: {...action.payload, quantity: 1}}
       } else {
         state[action.payload.sku].quantity = state[action.payload].quantity + 1
       }
      },
      removeFromCart: (state, action) => {
        const { [action.payload]: remove, ...rest} = state
        return rest
      },
      clearCart: (state, action) => {
        return {}
      },
      increaseItemQuantity: (state, action) => {
         console.log(action.payload)
         
           state[action.payload].quantity = state[action.payload].quantity + 1
       
      },
      decreaseItemQuantity: (state, action) => {
        if(state[action.payload].quantity === 1) {
          const { [action.payload]: remove, ...rest} = state
          return rest
        } else {
          state[action.payload].quantity = state[action.payload].quantity -1        }
      }
    },

  



})

export const {addToCart, 
              removeFromCart, 
              clearCart, 
              increaseItemQuantity,
              decreaseItemQuantity
            } = cartSlice.actions;

export default cartSlice.reducer