import { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import SocialLogin from "../../Shared/SocialLogin";
import "./LoginForm.css";

const LoginForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const emailRef = useRef();
  const passwordRef = useRef();

  //   -----------------------------------------

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from);
  }

  // ---------reset password-----------
  const resetPassword = async () => {
    await sendPasswordResetEmail(emailRef.current.value);
    alert("Sent email");
  };

  return (
    <div className="text-center">
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

        {/* ------------------------------ */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default LoginForm;
