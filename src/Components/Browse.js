import useNowPlayingMovies from "../../Utils/useNowPlayingMovies"
import usePopularMovies from "../../Utils/usePopularMovies"
import useTopRatedMovies from "../../Utils/useTopRatedMovies"
import useUpcomingMovies from "../../Utils/useUpcomingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse