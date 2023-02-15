import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPosts} from "./postsSlice";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
    'posts/fetchUserData',
    async function (params) {
        const {data} = axios.post('http://localhost:3005/login', params)
        return data
    }
)
const initialState = {
    email: '',
    password: '',
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = 'loading'
            state.email = ''
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.email = action.payload.email
            state.password = action.payload.password

        },
    }
})

export default authSlice.reducer
