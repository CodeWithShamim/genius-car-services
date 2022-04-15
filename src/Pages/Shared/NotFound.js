import React from "react";
import img from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="text-danger">
      <img className="img-fluid" src={img} alt="NotFound" />
    </div>
  );
};

export default NotFound;
