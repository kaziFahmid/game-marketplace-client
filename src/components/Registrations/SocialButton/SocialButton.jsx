import React from "react";

import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";

import useAuth from "../../hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
export default function SocialLogin() {
  const { handleGoogleSignin } = useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogle = (e) => {
    e.preventDefault();
    handleGoogleSignin()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        console.log(user);
        axios
          .post("/allusers", {
            photo: user.photoURL,
            email: user.email,
            name: user.displayName,
            role: "user",
          })
          .then((response) => {
            console.log(response);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="text-center mt-5">
      <button onClick={handleGoogle} className="btn w-80 bg-slate-300">
        Google
      </button>
    </div>
  );
}
