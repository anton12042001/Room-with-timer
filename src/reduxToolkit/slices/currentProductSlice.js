import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const initialState = {
    title: null,
    members: [],
}


export const getApparatus = createAsyncThunk("currentProduct/getApparatus", async (_, {rejectWithValue, dispatch}) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, `apparatus/FjucQ5SRtmupQk1cPEmV`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        dispatch(setProduct(docSnap.data()))
    }
})







const currentProcudctSlice = createSlice({
    name: 'currentProduct',
    initialState,
    reducers: {
        setProduct(state, action) {
            state.title = action.payload.title
            state.members = action.payload.members
        },
    },
    extraReducers:(builder => {

    })
})
export const {setProduct} = currentProcudctSlice.actions

export default currentProcudctSlice.reducer