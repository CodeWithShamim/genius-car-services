import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.svg";
import google from "../../images/google.png";
import github from "../../images/github.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
// import "./RegisterForm.css";
// firebae ------------------------------------------
// import { auth } from "../../firebase.init";

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import errorIcon from "../../images/error.png";
import app from "../../firebase.init";

const auth = getAuth(app);

const RegisterForm = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [SignInWithGithub] = useSignInWithGithub(auth);
  const [SignInWithFacebook] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  //   -----------navigate-------------

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  //   console.log(email, password);

  //   -----------------------------------------
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (name && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError("Password did not matched!!");
        return;
      } else if (password.length < 6) {
        setError("password at least 6 character or longer!!");
        return;
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            // console.log(result.user);
            updateProfile(auth.currentUser, {
              displayName: name,
              // photoURL: "https://example.com/jane-q-user/profile.jpg",
            });
            // ---------------------------email-verification----------------
            sendEmailVerification(auth.currentUser).then(() => {
              console.log("Email verification sent!");
            });
            navigate("/email-confirmation");
            // ---------------------------------------
          })
          .catch((error) => setError(error.message));
      }
    } else {
      setError("ohh? you mistake some filled!!");
      return;
    }
  };

  return (
    <div className="text-center">
      <div
        className="w-50 mx-auto login-container mt-3"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img className="logo" src={logo} alt="logo" />
        <br />
        <form onSubmit={handleRegister}>
          <div className=" text-start">
            <div class="mb-3">
              <label for="exampleInputText" class="form-label">
                Name
              </label>
              <input
                onBlur={handleNameBlur}
                type="text"
                className="form-control"
                id="exampleInputText"
                aria-describedby="textHelp"
              />
              {/* <div id="textHelp" className="form-text text-warning">
                We'll never share your email with anyone else.
              </div> */}
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-warning">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputConfirm-password" class="form-label">
                Confirm Password
              </label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                class="form-control"
                id="exampleInputConfirm-password"
              />
            </div>
            <p className="fs-6 text-center text-warning">
              {error && (
                <>
                  <img src={errorIcon} alt="errorIcon" /> Error,
                </>
              )}{" "}
              {error}
            </p>

            <p className="signup">
              Already have an account? <Link to="/login">login</Link>
            </p>
          </div>

          <button
            type="submit"
            className="login-btn btn btn-warning w-100 fw-bold fs-4"
          >
            Register
          </button>
        </form>

        <p className="bg-light rounded mx-auto my-3">
          <hr />
        </p>
        <p>Continue With.... </p>
        <div className="icon-container d-flex justify-content-evenly">
          <span>
            <img
              onClick={() => {
                signInWithGoogle().then(() =>
                  navigate(from, { replace: true })
                );
              }}
              src={google}
              alt="google icon"
            />
          </span>
          <span>
            <img
              onClick={() => {
                SignInWithGithub().then(() =>
                  navigate(from, { replace: true })
                );
              }}
              src={github}
              className="github-item"
              alt="github icon"
            />
          </span>
          <span>
            <img
              onClick={() => {
                SignInWithFacebook().then(() =>
                  navigate(from, { replace: true })
                );
              }}
              src={facebook}
              alt="facebook icon"
            />
          </span>
          <span>
            <img src={twitter} alt="twitter icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
