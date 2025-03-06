import { useEffect } from "react"
import { API_OPTIONS } from "../../Utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies, setActiveMovie } from "../../Utils/ReduxStore/moviesSlice"


const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    useEffect(()=>{
       !nowPlayingMovies && getNowPlayingMovies()
    },[])

    const getNowPlayingMovies= async () =>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        
        dispatch(addNowPlayingMovies(json.results))
        dispatch(setActiveMovie(json.results[0]))
        
    }
}

export default useNowPlayingMovies