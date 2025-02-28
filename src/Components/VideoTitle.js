

const VideoTitle = ({title, overview}) => {
  return (
    <div className=" bg-gradient-to-r from-black absolute text-white pl-20 pt-[20%] z-9 w-screen aspect-video">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-1xl w-1/4">{overview}</p>
        <button className="px-16 py-4 m-2 bg-white text-black rounded-lg hover:opacity-80">▷ Play</button>
        <button className="px-16 py-4 bg-gray-700 rounded-lg">🛈 More Info</button>
    </div>
  )
}

export default VideoTitle