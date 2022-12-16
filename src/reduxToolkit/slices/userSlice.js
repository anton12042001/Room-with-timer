import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    id: null,
    token: null,

}

export const getTask = createAsyncThunk("user/getTask", async (_, {rejectWithValue, dispatch}) => {

})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {

        },
    },
    extraReducers:(builder => {
    })
})
export const {setUser} = userSlice.actions

export default userSlice.reducer