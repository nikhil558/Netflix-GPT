import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "./moviesSlice"


const useTopRatedMovies = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
       getTopRatedMovies()

    },[])

    const getTopRatedMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        
        dispatch(addTopRatedMovies(json.results))
       
    }
}

export default useTopRatedMovies