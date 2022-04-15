import React from "react";

const Footer = () => {
  const todayDate = new Date();
  const getYear = todayDate.getFullYear();
  return (
    <div className="bg-secondary py-5 mt-5">
      <p className="text-white">Copyright @ {getYear}</p>
      <h4 className="text-white">Genius Car Service</h4>
    </div>
  );
};

export default Footer;
