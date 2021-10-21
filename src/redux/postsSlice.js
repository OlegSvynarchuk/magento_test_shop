import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPostsAsync = createAsyncThunk(
    'posts/loadPostsAsync', 
     async () => {
         const response = await axios.get('https://dummyapi.io/data/v1/post', {
            headers : {
                'app-id' : '616d8725b4c1fe5238e08575'
            }
        })
         return response.data
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState: {},

   

    extraReducers: {
        [loadPostsAsync.fulfilled]: (state, action) => {
            return {...state, posts: action.payload}
        },
        [loadPostsAsync.rejected]: (state, action) => {
            return {...state, error: action.error.message}
        }

    }



})

export const {loadPosts} = postsSlice.actions;

export default postsSlice.reducer