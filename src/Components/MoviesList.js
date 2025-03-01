import Conversion from "../../Utils/Conversion"
import MovieCard from "./MovieCard"


const MoviesList = ({title, movies}) => {
  if(!movies) return 

  const convertedTitle = Conversion(title)

  return (
    <div className="px-6">
        <h1 className="text-3xl font-bold py-2 text-white">{convertedTitle}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {movies.map(each => <MovieCard key={each.id} movie={each}/>)}
            </div>
        </div>
    </div>
  )
}

export default MoviesList