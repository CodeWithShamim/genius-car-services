import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import logo from "../../../images/logo.png";
import auth from "../../../firebase.init";
import SocialLogin from "../../Shared/SocialLogin";

const RegisterForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [agree, setAgree] = useState(false);
  //   -----------------------------------------
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    // console.log(name, email, password, confirmPassword);
    createUserWithEmailAndPassword(email, password);
    // console.log(user);
  };

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

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
                type="text"
                name="name"
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
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                name="password"
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
                name="confirmPassword"
                type="password"
                class="form-control"
                id="exampleInputConfirm-password"
              />
            </div>
            <p>
              {" "}
              <input
                onClick={() => setAgree(!agree)}
                type="checkbox"
                name="terms"
                id="terms"
              />{" "}
              <span className={agree ? "text-info" : "text-light"}>
                Accept Genius Car Services Terms & Condition
              </span>
            </p>
            {/* <p className="fs-6 text-center text-warning">
              {error && (
                <>
                  <img src={errorIcon} alt="errorIcon" /> Error,
                </>
              )}{" "}
              {error}
            </p> */}

            <p className="signup">
              Already have an account? <Link to="/login">login</Link>
            </p>
          </div>

          <button
            disabled={!agree}
            type="submit"
            className="login-btn btn btn-warning w-100 fw-bold fs-4"
          >
            Register
          </button>
        </form>

        {/* --------------------------------------- */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default RegisterForm;
