import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
        const response = await fetch('http://localhost:3005/users')
        const data = await response.json()
        return data
    }
)

const initialState = {
    posts: [],
    status: null,
    error: null
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = 'null'
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.posts = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {

        }
    }
})
export default usersSlice.reducer
