import React from "react";

// -----------------------
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "John Smith", img: expert1 },
    { id: 2, name: "Will Smith", img: expert2 },
    { id: 3, name: "Andy Dkhehan", img: expert3 },
    { id: 4, name: "Huang Sen", img: expert4 },
    { id: 5, name: "Devid Watson", img: expert5 },
    { id: 6, name: "Kenil Sout", img: expert6 },
  ];
  return (
    <div className="container">
      <h1 className="text-primary mb-4">Our Experts</h1>
      <div className="row g-4">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
