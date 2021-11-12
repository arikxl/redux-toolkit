import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// actions
export const fetchPosts = createAsyncThunk('post/list',
 async (payload, {rejectWithValue, getState, dispatch} ) =>{
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return data;
        } catch (error) {
            return error?.response
        }
})

// slices

const postSlices = createSlice({
    name: 'post',
    initialState: {},
    extraReducers: {

        [fetchPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.postsList = action.payload;
            state.loading = false;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export default postSlices.reducer;