import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "./moviesSlice"


const useUpcomingMovies = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
       getUpcomingMovies()

    },[])

    const getUpcomingMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        
        dispatch(addUpcomingMovies(json.results))
       
    }
}

export default useUpcomingMovies