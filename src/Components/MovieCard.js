import { useDispatch } from "react-redux"
import { MOVIE_CARD_IMG_URL } from "../../Utils/Constants"
import { replaceActiveMovie } from "../../Utils/ReduxStore/moviesSlice"


const MovieCard = ({movie}) => {
    const dispatch = useDispatch()
    const {poster_path} = movie
    
    if (!poster_path) return
    const updateActiveMovie = () => {
      dispatch(replaceActiveMovie(movie?.id))
    }
    
  return (
    <div className="w-48 mr-4 hover:border-2 border-white" onClick={updateActiveMovie}>
        <img src={MOVIE_CARD_IMG_URL + poster_path} alt="image"/>
    </div>
  )
}

export default MovieCard