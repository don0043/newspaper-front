import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function () {
        const {data} = await axios.get('http://localhost:3005/posts')
        return data

    }
)

const initialState = {
    posts: [],
    status: null,
    error: null
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'pending'
            state.error = 'null'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.posts = action.payload
        },
    }
})
export default postsSlice.reducer

