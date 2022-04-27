import React from "react";

import google from "../../images/social-icon/google.png";
import github from "../../images/social-icon/github.png";
import facebook from "../../images/social-icon/facebook.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "./Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  // -----------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // ---------------------------------------------

  let errorMessage;
  if (googleError || githubError || facebookError) {
    errorMessage = (
      <div>
        <p className="text-warning fw-bold mt-3">
          Error: {googleError?.message} {githubError?.message}{" "}
          {facebookError?.message}
        </p>
      </div>
    );
  }

  if (googleLoading || githubLoading || facebookLoading) {
    return <Loading></Loading>;
  }

  if (googleUser || githubUser || facebookUser) {
    navigate(from);
  }

  return (
    <div>
      {errorMessage}

      <div className="w-100 mx-auto d-flex justify-content-center align-items-center">
        <div
          className="w-100"
          style={{ height: "1px", backgroundColor: "#fff" }}
        ></div>
        <p className="mx-2 mt-3">or</p>
        <div
          className="w-100"
          style={{ height: "1px", backgroundColor: "#fff" }}
        ></div>
      </div>

      {/* ------------------------------------- */}

      <div className="w-75 mx-auto">
        <p
          onClick={() => signInWithGoogle()}
          className="border border-light  bg-dark"
          style={{ borderRadius: "30px" }}
        >
          <img src={google} alt="google icon" />
          <span className="fw-bold">Continue With Google</span>
        </p>

        <p
          onClick={() => signInWithGithub()}
          className="border border-light  bg-info"
          style={{ borderRadius: "30px" }}
        >
          <img src={github} alt="github icon" />
          <span className="fw-bold">Continue With Github</span>
        </p>

        <p
          onClick={() => signInWithFacebook()}
          className="border border-light  bg-primary"
          style={{ borderRadius: "30px" }}
        >
          <img src={facebook} alt="facebook icon" />
          <span className="fw-bold">Continue With Facebook</span>
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
