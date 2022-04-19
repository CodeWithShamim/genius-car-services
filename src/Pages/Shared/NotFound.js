import React from "react";
import img from "../../images/404.jpg";
import DynamicTitle from "./DynamicTitle";

const NotFound = () => {
  return (
    <div className="text-danger">
      <DynamicTitle title={"NotFound"}></DynamicTitle>
      <img className="img-fluid" src={img} alt="NotFound" />
    </div>
  );
};

export default NotFound;
