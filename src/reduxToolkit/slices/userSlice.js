import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {getFirestore} from "firebase/firestore";


const initialState = {
    email: null,
    id: null,
    token: null,

}

export const authUser = createAsyncThunk("user/authUser", async (action, {rejectWithValue, dispatch}) => {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth =  getAuth();
        signInWithEmailAndPassword(auth, action.email, action.password)
            .then((userCredential) => {
                const dataUser = {
                    email: userCredential.user.email,
                    id: userCredential.user.uid,
                    token: userCredential.user.accessToken
                }
                dispatch(setUser(dataUser))

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
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },
    },
    extraReducers:(builder => {
    })
})
export const {setUser} = userSlice.actions

export default userSlice.reducer