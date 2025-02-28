import { useRef, useState } from "react";
import Header from "./Header";
import FormValidation from "../../Utils/FormValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useDispatch } from "react-redux";
import { AddUser } from "../../Utils/userSlice";
import { BACKGROUND_IMAGE, PROFILE_PIC } from "../../Utils/Constants";

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };

    const onSubmitedForm = () => {
        const message = isSignIn ? FormValidation(null, email.current.value, password.current.value) : FormValidation(name.current.value, email.current.value, password.current.value);
        setErrMsg(message);
        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: PROFILE_PIC
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(AddUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        // An error occurred
                        setErrMsg(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + "-" + errorMessage);
                });
        }
    };

    return (
        <div className="">
            <Header />
            <div className="absolute w-12/12">
                <img className="w-[100%]" src={BACKGROUND_IMAGE} alt="bgImage" />
            </div>
            <form className="absolute bg-black w-3/12 p-12 m-auto top-37 left-0 right-0 opacity-80 rounded-lg text-white" onSubmit={(e) => e.preventDefault()}>
                <h1 className="p-2 m-2 font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input ref={name} className="p-4 my-4 bg-gray-700 w-full" type="text" placeholder="Full Name" />}
                <input ref={email} className="p-4 my-4 bg-gray-700 w-full" type="text" placeholder="Email" />
                <input ref={password} className="p-4 my-4 bg-gray-700 w-full" type="password" placeholder="Password" />
                <p>{errMsg}</p>
                <button className="p-4 my-6 bg-red-700 w-full" onClick={onSubmitedForm}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4" onClick={toggleSignInForm}>{isSignIn ? "New to netflix? Sign up now" : "Already Register Sign In"}</p>
            </form>
        </div>
    );
};

export default Login;