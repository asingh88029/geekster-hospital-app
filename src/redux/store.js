import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice"
import AppReducer from "./slices/AppSlice"

const Store = configureStore({
    reducer : {
        user : UserReducer,
        app : AppReducer
    }
})

export default Store;