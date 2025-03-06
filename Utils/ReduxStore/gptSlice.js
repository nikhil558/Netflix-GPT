import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "GPT",
    initialState:{
        isGptSearch: false,
        getMovieNames:null,
        getMovieResults:null
    },
    reducers:{
        checkGptSearch: (state)=>{
           state.isGptSearch = !state.isGptSearch
        },
        updateGetMovies: (state,action) => {
            const {movieNames, movieResults}= action.payload
            state.getMovieNames = movieNames
            state.getMovieResults = movieResults
        }

    }

})


export const {checkGptSearch, updateGetMovies} = gptSlice.actions
export default gptSlice.reducer