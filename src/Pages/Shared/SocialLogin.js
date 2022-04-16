import React from "react";

import google from "../../images/social-icon/google.png";
import github from "../../images/social-icon/github.png";
import facebook from "../../images/social-icon/facebook.png";

const SocialLogin = () => {
  return (
    <div>
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
          className="border border-light  bg-dark"
          style={{ borderRadius: "30px" }}
        >
          <img src={google} alt="google icon" />
          <span className="fw-bold">Continue With Google</span>
        </p>

        <p
          className="border border-light  bg-info"
          style={{ borderRadius: "30px" }}
        >
          <img src={github} alt="github icon" />
          <span className="fw-bold">Continue With Github</span>
        </p>

        <p
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
