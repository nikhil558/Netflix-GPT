import {  signOut } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store=> store.user)
  const handelSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")

      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }
  return (
    <div className="p-4 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-30"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="logo"/>
        {user && (<div className="flex p-1">
          <p>{user.displayName}</p>
          <img className="w-10 h-10"src={user.photoURL} alt="usericon" />
          <p className="ml-2" onClick={handelSignOut}>Sign out</p>
        </div>)}
    </div>
  )
}

export default Header