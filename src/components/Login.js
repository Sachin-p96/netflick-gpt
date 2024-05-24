import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const handleSignInForm = () => {
    setIsSigninForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="login"
        />
      </div>
      <form className='absolute my-36 mx-auto w-3/12  bg-black  right-0 left-0 flex flex-col p-6 bg-opacity-80 rounded-lg  text-white "'>
        <h1 className="text-white text-3xl my-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          type="email"
          placeholder="Enter your mail"
          className="p-2 my-4 w-full bg-gray-400 bg-opacity-55 rounded-md"
        ></input>
        {!isSignInForm && (<input
          type="name"
          placeholder="Enter your Full name"
          className="p-2 my-4 w-full bg-gray-400 bg-opacity-55 rounded-md "
        ></input>) }
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 my-4 w-full bg-gray-400 bg-opacity-55 rounded-md "
        ></input>
        <button className="text-white bg-red-600 my-6 p-2 rounded-lg font-bold font-mono">
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
