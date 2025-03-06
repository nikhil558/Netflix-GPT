import { useRef } from "react"
import { API_OPTIONS, BACKGROUND_IMAGE } from "../../Utils/Constants"
import { useDispatch, useSelector } from "react-redux"
import LANG from "../../Utils/langConstants"
import openai from "../../Utils/openai"
import { updateGetMovies } from "../../Utils/ReduxStore/gptSlice"



const SearchBar = () => {
    const searchInput= useRef()
    const dispatch= useDispatch()
    const langConfig = useSelector(store => store.lang.langPreference)

    const searchMovieTMDB = async(movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      const exactMatch = json.results.filter(each => each.title.toLowerCase() === movie.toLowerCase());
      return exactMatch
    }

    const handleSearch = async() => {

        const gptQuery = "ACt as a movie recomendation system and suggest some movies for the query" + searchInput.current.value + ". only give me names of 5 movies list, comma separated "

        // const gptResults = await openai.chat.completions.create({
        //   messages: [{ role: 'user', content: gptQuery }],
        //   model: 'gpt-4o',
        // })

        // console.log(gptResults)
        const data= await fetch("https://free-unoficial-gpt4o-mini-api-g70n.onrender.com/chat/?query="+ gptQuery)
        const json = await data.json()
        const searchResults = json.results.split(", ") 
        
        const getMovies = searchResults.map(each => searchMovieTMDB(each))

        const movies= await Promise.all(getMovies)
        dispatch(updateGetMovies({movieNames:searchResults, movieResults: movies}))
    }

  return (
    <div>
        <div className="fixed w-12/12">
             <img className="w-[100%]" src={BACKGROUND_IMAGE} alt="bgImage" />
        </div>
        <div className="absolute flex ml-[30%] mt-[10%] bg-black grid grid-cols-12 w-1/3 z-10 rounded-lg">
            <input type="text" className="h-10 border-2 border-white col-span-9 rounded-lg px-2 py-6 text-white" placeholder ={LANG[langConfig].placeholder} ref={searchInput}/>
            <button className="h-full w-full bg-red-600 text-white col-span-3 rounded-lg" onClick={handleSearch}>{LANG[langConfig].search}</button>
        </div>
    </div>
    
  )
}

export default SearchBar