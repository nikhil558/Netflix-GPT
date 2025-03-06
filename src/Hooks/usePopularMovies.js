import { useEffect } from "react"
import { API_OPTIONS } from "../../Utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../../Utils/ReduxStore/moviesSlice"


const usePopularMovies = () => {
    const dispatch=useDispatch()
    const popularMovies = useSelector(store => store.movies.popularMovies)

    useEffect(()=>{
       !popularMovies && getNowPlayingMovies()

    },[])

    const getNowPlayingMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        
        dispatch(addPopularMovies(json.results))
       
    }
}

export default usePopularMovies