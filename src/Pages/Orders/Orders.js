import React from "react";
import DynamicTitle from "../Shared/DynamicTitle";

const Orders = () => {
  return (
    <div
      style={{ minHeight: "60vh" }}
      className="d-flex flex flex-column align-items-center justify-content-center"
    >
      <DynamicTitle title={"checkout"}></DynamicTitle>
      <h1>this is orders</h1>
    </div>
  );
};

export default Orders;
