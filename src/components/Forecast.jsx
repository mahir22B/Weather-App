import React from "react";
import { convertDt } from "./Weather";
import "../styles/forecast.css";

const Forecast = ({ dt, temp, icon }) => {
  dt = convertDt(dt);

  return (
    <div className="forecast-main">
      <p>{dt}</p>
      <img src={icon} alt="" />
      <p style={{ fontWeight: "bold" }}>{temp.toFixed()}°</p>
    </div>
  );
};

export default Forecast;
