import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service-container">
      <img className="img-fluid" src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>Price: {price}</h5>
      <button className="btn btn-primary">Booking-{name}</button>
    </div>
  );
};

export default Service;
