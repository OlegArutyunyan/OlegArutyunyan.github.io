import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useYTApiServices from "../services/useYTApiServices";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState({
    userLoggedIn: false,
    userLoginRequest: 'idle',
    userAccessToken: null
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
        userPressedButton: (state) => {
            console.log('user login detected')
            state.userLoggedIn = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => { state.userLoginRequest = 'loading' })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.userLoginRequest = 'idle'
                state.userAccessToken = action.payload.accessToken
                userAdapter.setOne(state, action.payload)
                        console.log('this is result of user authentication ', action.payload)
            })
            .addCase(userLogin.rejected, (state, action) => { 
                state.userLoginRequest = 'error' 
            })
    }
})

const { actions, reducer } = userSLice
export const { selectAll } = userAdapter.getSelectors(state => state.user)

export default reducer
export const {
    userPressedButton
} = actions