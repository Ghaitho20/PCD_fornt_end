import React from "react";
import "./Faqs1.css";
import Faqs from "./faqs";
import Telechar from './telechar';

const Faqs1 = () => {
  return (
    <div className="faqs1-container">
      <div className="faqs1-content">
        <Faqs />
        <Telechar />
      </div>
    </div>
  );
};

export default Faqs1;