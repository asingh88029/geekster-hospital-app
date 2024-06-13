import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    mode : "LIGHT",
    language : "EN",
    location : "INDIA"
}

const AppSlice = createSlice({
    name : "app",
    initialState,
    reducers : {
        TOGGLE_MODE : (state, action)=>{
            state.mode === "LIGHT" ? state.mode = "DARK" : state.mode = "LIGHT"
        },
        CHANGE_LANGUAGE : (state, action)=>{
            state.language = action.payload
        },
        CHANGE_LOCATION : (state, action)=>{
            state.location = action.payload
        }
    }
})

export const {TOGGLE_MODE, CHANGE_LANGUAGE, CHANGE_LOCATION} = AppSlice.actions;

export default AppSlice.reducer;