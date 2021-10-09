import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProductsAsync = createAsyncThunk(
    'products/loadProductsAsync', 
     async (token) => {
         const response = await axios.post('/api/getproducts', {
         data: {
             token: token
         }    
         
    }
)
         return response.data
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        err: null
    },

    reducers: {
      
    },

    extraReducers: {
        [loadProductsAsync.fulfilled]: (state, action) => {
            return {...state, products: action.payload.products}
        },
        [loadProductsAsync.rejected]: (state, action) => {
            return {...state, error: action.error.message}
        }

    }



})

export const {loadProducts} = productsSlice.actions;

export default productsSlice.reducer