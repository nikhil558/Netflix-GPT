import { createSlice } from "@reduxjs/toolkit";


const langSlice = createSlice({
    name: "language",
    initialState:{
        langPreference: "en"
    },
    reducers:{
        UpdateLanguagePreference : (state, action) =>{
            state.langPreference= action.payload
        }
    }
})


export const {UpdateLanguagePreference} = langSlice.actions
export default langSlice.reducer