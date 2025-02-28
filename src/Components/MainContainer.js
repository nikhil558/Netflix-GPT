import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"


const MainContainer = () => {
    const movie= useSelector(store => store.movies?.nowPlayingMovies)
    if(!movie) return 
    const mainMovie=movie[0]
  return (
    <div>
        <VideoTitle title={mainMovie.title} overview={mainMovie.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer