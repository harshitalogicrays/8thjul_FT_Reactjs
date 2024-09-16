import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

const logger = (storeAPI)=>(next)=>(action)=>{
    console.log("action",action)
    console.log("store",storeAPI.getState())
    return next(action)
}

const store = configureStore({
    reducer:{
        user:userSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store