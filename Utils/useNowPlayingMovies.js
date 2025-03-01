import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies, setActiveMovie } from "./moviesSlice"


const useNowPlayingMovies = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
       getNowPlayingMovies()

    },[])

    const getNowPlayingMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        
        dispatch(addNowPlayingMovies(json.results))
        dispatch(setActiveMovie(json.results[0]))
       
    }
}

export default useNowPlayingMovies