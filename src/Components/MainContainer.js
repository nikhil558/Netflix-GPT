import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"


const MainContainer = () => {
    // const movie= useSelector(store => store.movies?.nowPlayingMovies)
    const movie= useSelector(store => store.movies?.activeMovie)
    if(!movie) return 
    // const mainMovie=movie[0]
  return (
    <div>
        <VideoTitle title={movie.title} overview={movie.overview}/>
        <VideoBackground movieId={movie.id}/>
    </div>
  )
}

export default MainContainer