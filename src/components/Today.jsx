import React from "react";
import "../styles/today.css";

const Today = ({ temp, icon, description }) => {
  return (
    <div className="today-main">
      <p>Today</p>
      <div className="details">
        <img src={icon} alt="" />
        <div>
          <span>{temp.toFixed()}°</span>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Today;
