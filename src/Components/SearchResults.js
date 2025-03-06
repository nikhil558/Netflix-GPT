import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

const SearchResults = () => {
  const searchResults = useSelector(store => store.gpt)
  const {getMovieNames, getMovieResults} = searchResults
  if(!getMovieNames) return

  return (
    <div className="relative pt-[20%]">
      <div className="">
      {getMovieNames.map((each,index) => <MoviesList title={each} key={each} movies={getMovieResults[index]}/>
      )}
    </div>
    </div>

  )
}

export default SearchResults