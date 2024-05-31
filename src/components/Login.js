import { useRef, useState } from "react";
import Header from "./Header";
import { checkEmailPassword } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const handleSignInForm = () => {
    setIsSigninForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleSigninClick = (e) => {
    e.preventDefault();
    const message = checkEmailPassword(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);

    if (!isSignInForm) {
      console.log("ami getting here");
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "heyUser");
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage.split("/")[1].replace(")", "").trim());
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage.split("/")[1].replace(")", "").trim());
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="login"
        />
      </div>
      <form className='absolute my-36 mx-auto w-3/12  bg-black  right-0 left-0 flex flex-col p-6 bg-opacity-80 rounded-lg  text-white "'>
        <h1 className="text-white text-3xl my-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="email"
          placeholder="Enter your mail"
          className="p-2 my-4 w-full bg-gray-400 bg-opacity-55 rounded-md"
        ></input>
        {!isSignInForm && (
          <input
            ref={name}
            type="name"
            placeholder="Enter your Full name"
            className="p-2 my-4 w-full bg-gray-400 bg-opacity-55 rounded-md "
          ></input>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Enter your password"
          className="p-2 my-4 w-full bg-gray-400 bg-opacity-55 rounded-md "
        ></input>
        <p className="text-red-700 font-mono font-bold">{errMessage}</p>
        <button
          className="text-white bg-red-600 my-6 p-2 rounded-lg font-bold font-mono"
          onClick={handleSigninClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignInForm}>
          {isSignInForm
            ? "Are You New To Nelflick? Sign Up Now"
            : "Already a User? Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
