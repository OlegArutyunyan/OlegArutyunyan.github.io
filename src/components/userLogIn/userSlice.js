import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useYTApiServices from "../services/useYTApiServices";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState({
    userLoggedIn: false,
    userLoginRequest: 'idle',
    userAccessToken: sessionStorage.getItem('user-access-token') ? sessionStorage.getItem('user-access-token') : null,
    userData: sessionStorage.getItem('user-data') ? JSON.parse(sessionStorage.getItem('user-data')) : null
})

export const userLogin = createAsyncThunk(
    'user/userLogin',
    () => {
        const { userAuthentication } = useYTApiServices()
        return userAuthentication()
    }
)

const userSLice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userLogOut: (state) => {
            console.log('user logout detected')
            state.userAccessToken = null
            state.userData = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => { state.userLoginRequest = 'loading' })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.userLoginRequest = 'idle'
                state.userAccessToken = action.payload.accessToken
                state.userData = action.payload
                // userAdapter.setOne(state, action.payload)
                        console.log('this is result of user authentication ', action.payload)
            })
            .addCase(userLogin.rejected, (state, action) => { 
                state.userLoginRequest = 'error'
                console.log(action.payload)
            })
    }
})

const { actions, reducer } = userSLice
export const { selectAll } = userAdapter.getSelectors(state => state.user)

export default reducer
export const {
    userLogOut
} = actions