import { useSelector } from "react-redux"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import usePopularMovies from "../Hooks/usePopularMovies"
import useTopRatedMovies from "../Hooks/useTopRatedMovies"
import useUpcomingMovies from "../Hooks/useUpcomingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GptSearchPage from "./GptSearchPage"


const Browse = () => {
  const gptSeach = useSelector(store => store.gpt.isGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      {gptSeach ? <GptSearchPage/> :
               <>
                  <MainContainer/>
                  <SecondaryContainer/>
               </>
      }
      
    </div>
  )
}

export default Browse