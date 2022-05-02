import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import videos from '../components/singleVideo/videoSlice.js'

const store = configureStore({
    resucers: {videos},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store