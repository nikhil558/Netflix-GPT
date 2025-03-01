import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"


const SecondaryContainer = () => {
    const movies= useSelector(store => store.movies)

    if(!movies) return
    const keys= Object.keys(movies)

  return (
    <div className="bg-black">
        <div className="-mt-52 relative z-20">
            {keys.slice(0,-1).map(each => <MoviesList title={each} key={each} movies={movies[each]}/>)}
        </div>
    </div>
  )
}

export default SecondaryContainer