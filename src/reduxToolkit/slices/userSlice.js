import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
    email: null,
    id: null,
    token: null,

}

export const authUser = createAsyncThunk("user/authUser", async (action, {rejectWithValue, dispatch}) => {
    console.log('Срабоатет')
    const auth =  getAuth();
    console.log('Сработало')
    signInWithEmailAndPassword(auth, action.email, action.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
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