import { useState } from "react"
import Header from "./Header"


const Login = () => {
    const [isSignIn, setIsSignIn]= useState(true)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <div className="">
        <Header/>
        <div className="absolute w-12/12">
            <img className="w-[100%]"src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="bgImage"/>
        </div>
        <form className="absolute bg-black w-3/12 p-12 m-auto top-37 left-0 right-0 opacity-80 rounded-lg text-white">
            <h1 className="p-2 m-2 font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input className="p-4 my-4  bg-gray-700 w-full" type="text" placeholder="Full Name"/>}
            <input className="p-4 my-4  bg-gray-700 w-full" type="text" placeholder="Email"/>
            <input className="p-4 my-4   bg-gray-700 w-full"type="password" placeholder="Password"/>
            <button className="p-4 my-6 bg-red-700 w-full">Sign In</button>
            <p className="py-4" onClick={toggleSignInForm}>{isSignIn ? "New to netflix? Sign up now" : "Already Register Sign In"}</p>
        </form>
    </div>
  )
}

export default Login