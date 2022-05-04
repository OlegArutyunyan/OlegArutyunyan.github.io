import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import videos from '../components/singleVideo/videoSlice'
import user from '../components/userLogIn/userSlice'

const store = configureStore({
    reducer: {user, videos},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store