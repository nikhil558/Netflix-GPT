import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "Movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addMovieTrailer: (state,action) => {
            const data= action.payload
            const fltVideo=state.nowPlayingMovies.filter(each => each.id === data[0])
            fltVideo[0].trailer_video=data[1]
        }
    }
})


export const {addNowPlayingMovies, addMovieTrailer}=  moviesSlice.actions
export default moviesSlice.reducer