import { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import Loading from "../../Shared/Loading";
import SocialLogin from "../../Shared/SocialLogin";
import "./LoginForm.css";
// -----------------toast-----------
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../Shared/DynamicTitle";
import axios from "axios";
import useToken from "../../../hooks/useToken";

const LoginForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef();
  const passwordRef = useRef();

  //   -----------------------------------------

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    // ===============post data===================
    // const { data } = await axios.post(
    //   "https://genius-car-services-100.herokuapp.com/getToken",
    //   {
    //     email,
    //   }
    // );
    // localStorage.setItem("accessToken", data);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   ========token================
  const [token] = useToken(user);
  if (token) {
    toast("Congratulations, login success!");
    navigate(from);
  }

  // ---------reset password-----------
  const resetPassword = async () => {
    if (emailRef.current.value) {
      await sendPasswordResetEmail(emailRef.current.value);
      toast("Email successfully send");
    } else {
      toast("Please, enter your email!");
    }
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }

  return (
    <div className="text-center">
      <DynamicTitle title={"login"}></DynamicTitle>
      <div
        className="w-50 mx-auto login-container mt-3"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img className="logo" src={logo} alt="logo" />
        <br />
        <form onSubmit={handleLogin}>
          <div className=" text-start">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>

            <p className="signup">
              Don't have an account? <Link to="/signup">sign up</Link>
            </p>
          </div>

          {/* <p className="fs-6 text-center text-warning">
            {error && (
              <>
                <img src={errorIcon} alt="errorIcon" /> Error?
              </>
            )}{" "}
            {error}
          </p> */}

          <button
            type="submit"
            className="login-btn btn btn-warning w-100 fw-bold fs-4"
          >
            Login
          </button>
        </form>

        <Link
          to=""
          onClick={resetPassword}
          className="text-danger fw-bold mt-3"
        >
          Forgot your password?
        </Link>

        {/* ___________toast________________ */}
        <ToastContainer></ToastContainer>

        {/* ------------------------------ */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default LoginForm;
