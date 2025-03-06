import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"User",
    initialState:null,
    reducers:{
        AddUser: (state, action) => {
            return action.payload
        },
        RemoveUser: () => {
            return null
        }
    }
})

export const {AddUser, RemoveUser}= userSlice.actions
export default userSlice.reducer