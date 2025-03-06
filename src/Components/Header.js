import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddUser, RemoveUser } from "../../Utils/ReduxStore/userSlice";
import { LANG_PREF, LOGO } from "../../Utils/Constants";
import { checkGptSearch } from "../../Utils/ReduxStore/gptSlice";
import { UpdateLanguagePreference } from "../../Utils/ReduxStore/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSeach = useSelector((store) => store.gpt.isGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(AddUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(RemoveUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const changeConfig = (e) => {
    dispatch(UpdateLanguagePreference(e.target.value));
  };

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handelGptSearch = () => {
    dispatch(checkGptSearch());
  };

  return (
    <div className="p-4 w-full absolute bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-20 sm:w-30" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center p-1 space-x-4">
          {gptSeach && (
            <select
              onChange={changeConfig}
              className="px-2 mx-4 bg-gray-900 text-white rounded-lg"
            >
              {LANG_PREF.map((eachLang) => (
                <option key={eachLang.identifier} value={eachLang.identifier}>
                  {eachLang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-blue-700 text-white rounded-lg"
            onClick={handelGptSearch}
          >
            {!gptSeach ? "GPT Search" : "Home"}
          </button>
          <div className="flex items-center space-x-2">
            <p className="text-white">{user.displayName}</p>
            <img
              className="w-10 h-10 rounded-full"
              src={user.photoURL}
              alt="usericon"
            />
            <p
              className="ml-2 text-white cursor-pointer"
              onClick={handelSignOut}
            >
              Sign out
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;