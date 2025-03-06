import { useEffect } from "react"
import { API_OPTIONS } from "../../Utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import { addMovieTrailer } from "../../Utils/ReduxStore/moviesSlice"


const useMovieVideos= (movieId) => {
    const dispatch = useDispatch()
    const activeMovie = useSelector(store => store.movies.activeMovie)
    
    useEffect(()=>{
        !activeMovie.trailer_video && getMovieVideo()
    },[movieId])

    const getMovieVideo = async() => {

        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS)
        const json= await data.json()

        const video = json.results.filter(video => video.type==="Trailer") 

        if(video.length !== 0){
            dispatch(addMovieTrailer([movieId,video[0]]))
        }else{
            dispatch(addMovieTrailer([movieId,json.results[0]]))
        }
    }


}

export default useMovieVideos