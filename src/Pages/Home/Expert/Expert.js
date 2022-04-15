import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 rounded">
      <div className="expert-container">
        <img src={img} alt="expert" />
        <h3 className="my-2">Name: {name}</h3>
        <button className="btn btn-primary px-5">Details</button>
      </div>
    </div>
  );
};

export default Expert;
