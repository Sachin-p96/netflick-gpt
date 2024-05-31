import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/browse");
      });
  };
  return (
    <div className="py-2 px-8 absolute bg-gradient-to-b from-black z-30 w-full flex justify-between ">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex justify-center items-center">
          <div className="text-white font-bold mr-2 ">Hi {user.displayName}</div>
          <img
            alt="profile-icon"
            className="h-12 my-2 rounded-3xl"
            src="https://www.gravatar.com/avatar/0973db671e490d50b059838b796795c3?d=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAOh14GjlBGtb9XOI6yhqMl8i3rq0Pu-kOoWjhYCqL39P&s=250" />
          <button
            className="text-white font-serif font-bold mx-1"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
