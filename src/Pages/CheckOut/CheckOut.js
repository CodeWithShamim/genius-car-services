import React from "react";
import DynamicTitle from "../Shared/DynamicTitle";

const CheckOut = () => {
  return (
    <div
      style={{ minHeight: "60vh" }}
      className="d-flex flex flex-column align-items-center justify-content-center"
    >
      <DynamicTitle title={"checkout"}></DynamicTitle>
      <h1>this is CheckOut</h1>
    </div>
  );
};

export default CheckOut;
