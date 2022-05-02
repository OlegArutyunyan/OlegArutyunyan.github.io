import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const videosAdapter = createEntityAdapter()

const videosSLice = createSlice({
    name: 'videos',
    initialState: videosAdapter.getInitialState(),
    reducers: {
        videosAdded: (state, action) => videosAdapter.addOne(state, action.payload)
    }
})

const {actions, reducers} = videosSLice
export const {selectAll} = videosAdapter.getSelectors(state => state.videos)

export default reducers
export const {
    videosAdded
} = actions