import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postsSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer
    },
})
