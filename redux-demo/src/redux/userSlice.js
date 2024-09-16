import { createAsyncThunk, createSlice ,nanoid} from "@reduxjs/toolkit";

export const addUserToAPI = createAsyncThunk("user/addUserToAPI",async(userData,{rejectWithValue})=>{
    try{
   const res =  await fetch("https://66e7f13cb17821a9d9daa59b.mockapi.io/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(userData)
          })
    if(!res.ok){throw new Error('Failed to add user')}
    const data = await res.json()
    return {...data,id:nanoid()}
        }
        catch(error){
            return rejectWithValue(error.message)
        }
})


const userSlice = createSlice({
    name:"user",
    initialState:{users:[],error:'',loading:false},
    reducers:{ //pure functions
      /*  ADD_USER:(state,action)=>{
            // console.log("add user called",action.payload)
           let itemIndex =  state.users.findIndex(item=>item.email ==action.payload.email)
           if(itemIndex==-1){
             state.users.push({...action.payload,id:nanoid()})
             console.log(state.users)
           } }, */
        
        REMOVE_USER(state,action){
           let id = action.payload
        //    let itemIndex =  state.users.findIndex(item=>item.id ==id)
        //    state.users.splice(itemIndex,1)

           const filters =  state.users.filter(item=>item.id !=id)
            state.users=filters
        },

        REMOVE_ALL_USERS(state,action){ state.users=[]}
    },
    extraReducers:(builder)=>{
        builder.addCase(addUserToAPI.pending,(state)=>{
            state.loading=true;state.error=null
        })
        .addCase(addUserToAPI.fulfilled,(state,action)=>{
            state.users.push(action.payload);state.loading=false
        })
        .addCase(addUserToAPI.rejected,(state,action)=>{
            state.loading=false;state.error=action.payload
        })
    }
})

// export const {ADD_USER,REMOVE_USER,REMOVE_ALL_USERS}=userSlice.actions
export const {REMOVE_USER,REMOVE_ALL_USERS}=userSlice.actions
// console.log(userSlice.actions)
export default userSlice

export const selectUsers =(state)=>state.user.users