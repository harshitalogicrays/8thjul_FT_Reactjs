import { createSlice ,nanoid} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{ //pure functions
        ADD_USER:(state,action)=>{
            // console.log("add user called",action.payload)
           let itemIndex =  state.users.findIndex(item=>item.email ==action.payload.email)
           if(itemIndex==-1){
             state.users.push({...action.payload,id:nanoid()})
             console.log(state.users)
           } },
        
        REMOVE_USER(state,action){
           let id = action.payload
        //    let itemIndex =  state.users.findIndex(item=>item.id ==id)
        //    state.users.splice(itemIndex,1)

           const filters =  state.users.filter(item=>item.id !=id)
            state.users=filters
        },

        REMOVE_ALL_USERS(state,action){ state.users=[]}
    }
})

export const {ADD_USER,REMOVE_USER,REMOVE_ALL_USERS}=userSlice.actions
// console.log(userSlice.actions)
export default userSlice

export const selectUsers =(state)=>state.user.users