import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddUser, RemoveUser } from "../../Utils/userSlice";
import { LOGO } from "../../Utils/Constants";

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store=> store.user)
  const dispatch= useDispatch()

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(AddUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate("/browse")

      } else {
        // User is signed out
        dispatch(RemoveUser())
        navigate("/")
      }
    })

    return () => unsubscribe()
  }, [])

  const handelSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }
  return (
    <div className="p-4 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-30"src={LOGO} alt="logo"/>
        {user && (<div className="flex p-1">
          <p className="pr-2 text-white">{user.displayName}</p>
          <img className="w-10 h-10"src={user.photoURL} alt="usericon" />
          <p className="ml-2 text-white" onClick={handelSignOut}>Sign out</p>
        </div>)}
    </div>
  )
}

export default Header