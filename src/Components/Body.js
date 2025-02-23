import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./Login"
import Browse from "./Browse"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useDispatch } from "react-redux";
import { AddUser, RemoveUser } from "../../Utils/userSlice";

const Body = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(AddUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))

      } else {
        // User is signed out
        dispatch(RemoveUser())
      }
    })}, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse"element={<Browse/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Body