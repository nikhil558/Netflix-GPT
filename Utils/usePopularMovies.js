import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "./moviesSlice"


const usePopularMovies = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
       getNowPlayingMovies()

    },[])

    const getNowPlayingMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        
        dispatch(addPopularMovies(json.results))
       
    }
}

export default usePopularMovies