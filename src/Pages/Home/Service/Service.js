import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;

  const navigate = useNavigate();
  const handleServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img className="img-fluid" src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>Price: {price}</h5>
      <button
        className="btn btn-primary"
        onClick={() => handleServiceDetail(id)}
      >
        Booking-{name}
      </button>
    </div>
  );
};

export default Service;
