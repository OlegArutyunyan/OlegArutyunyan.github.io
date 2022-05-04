import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useYTApiServices from "../services/useYTApiServices";

const videosAdapter = createEntityAdapter()

const initialState = videosAdapter.getInitialState({
    videosLoadingStatus: 'idle'
})

export const fetchRecommendVideos = createAsyncThunk(
    'videos/fetchRecommendVideos',
    () => {
        const { recommendedVideos } = useYTApiServices()
        return recommendedVideos()
    }
)

const videosSLice = createSlice({
    name: 'videos',
    initialState: initialState,
    reducers: {
        videosAdded: (state, action) => videosAdapter.addOne(state, action.payload)
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendVideos.pending, (state) => { state.videosLoadingStatus = 'loading' })
            .addCase(fetchRecommendVideos.fulfilled, (state, action) => {
                state.videosLoadingStatus = 'idle'
                videosAdapter.setAll(state, action.payload)
            })
            .addCase(fetchRecommendVideos.rejected, (state) => { state.videosLoadingStatus = 'error' })
    }
})

const { actions, reducer } = videosSLice
export const { selectAll } = videosAdapter.getSelectors(state => state.videos)

export default reducer
export const {
    videosAdded
} = actions