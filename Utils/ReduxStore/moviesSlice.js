import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "Movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        activeMovie:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addMovieTrailer: (state,action) => {
            const data= action.payload
            state.activeMovie.trailer_video=data[1]
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        setActiveMovie:(state, action) => {
            state.activeMovie=action.payload
        },
        replaceActiveMovie:(state, action) => {
            // state.activeMovie= state.nowPlayingMovies.filter(each=> each.id === action.payload)[0]   
            const allMoviesList=[...state.nowPlayingMovies,...state.popularMovies, ...state.topRatedMovies,...state.upcomingMovies]
            state.activeMovie= allMoviesList.filter(each=> each.id === action.payload)[0] 
        }
    }
})


export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, setActiveMovie, replaceActiveMovie }=  moviesSlice.actions
export default moviesSlice.reducer