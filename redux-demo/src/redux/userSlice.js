import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{ //pure functions
        ADD_USER:(state,action)=>{console.log("add user called",action.payload)},
        REMOVE_USER(state,action){}
    }
})

export const {ADD_USER,REMOVE_USER}=userSlice.actions
// console.log(userSlice.actions)
export default userSlice