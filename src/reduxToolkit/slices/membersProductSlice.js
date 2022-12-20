import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const initialState = {
    membersProduct:[]

}



export const getMembersProduct = createAsyncThunk("membersProduct/getMembersProduct", async (action, {rejectWithValue, dispatch}) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const array = []
    action.map(async (m) => {
        const docRef = doc(db, "users", `${m}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const member = {
                id: docSnap.data().id,
                email:docSnap.data().email,
                name:docSnap.data().name,
                active:docSnap.data().active
            }
            console.log("СРАБОТАЛО")
               dispatch(setMembers(member))
        }
    })
})




const membersProductSlice = createSlice({
    name: 'membersProduct',
    initialState,
    reducers: {
        setMembers(state, action) {
            debugger
            state.membersProduct.push(action.payload)
        },
        removeMembers(state){
            state.membersProduct = []
        }
    },
    extraReducers:(builder => {

    })
})
export const {setMembers,removeMembers} = membersProductSlice.actions

export default membersProductSlice.reducer