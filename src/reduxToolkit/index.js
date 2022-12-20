import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import currentApparatusReducer from './slices/currentProductSlice'
import membersProductReducer from './slices/membersProductSlice'

export const store = configureStore({
    reducer: {
        user:userReducer,
        currentApparatus:currentApparatusReducer,
        members:membersProductReducer,
    },

})