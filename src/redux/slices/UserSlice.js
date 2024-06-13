import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name : "user",
    initialState : {
        role : "",
        email : "",
        name : "",
        id : ""
    },
    reducers : {
        UPDATE_ROLE : (state, action)=>{
            state.role = action.payload
        },
        UPDATE_EMAIL : (state, action)=>{
            state.email = action.payload
        },
        UPDATE_NAME : (state, action)=>{
            state.name = action.payload
        },
        UPDATE_ID : (state, action)=>{
            state.id = action.payload
        },
    }
})

export const {UPDATE_EMAIL, UPDATE_NAME, UPDATE_ID, UPDATE_ROLE} = UserSlice.actions;

export default UserSlice.reducer;
