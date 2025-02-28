import { useSelector } from "react-redux"
import useMovieVideos from "../../Utils/useMovieVideos"


const VideoBackground = ({movieId}) => {

    useMovieVideos(movieId)

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    const {trailer_video} = movies[0]
    if(!trailer_video) return 
  return (
    <div className="absolute w-screen" >
        <iframe  className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailer_video?.key+"?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground