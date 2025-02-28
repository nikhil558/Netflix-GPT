import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "./moviesSlice"


const useMovieVideos= (movieId) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        getMovieVideo()
    },[])

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