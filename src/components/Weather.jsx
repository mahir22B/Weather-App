import React, { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import Today from "./Today";
import "../styles/weather.css";

// Function to generate day of the week

export const convertDt = (dt) => {
  dt = new Date(dt * 1000);
  dt.getDay();
  let day = { weekday: "short" };

  return Intl.DateTimeFormat("en-US", day).format(dt);
};

// Call to get weather data

const Weather = ({ place }) => {
  const [tempData, setTempData] = useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}?lat=${place[1]}&lon=${place[2]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((resp) => setTempData(resp.data))
      .catch((err) => alert(err));
  }, [place]);

  return (
    <div className="content-area">
      <div>
        {/* Displaying today's data */}

        {tempData
          ? tempData.daily
              .slice(0, 1)
              .map((first, i) => (
                <Today
                  key={i}
                  temp={first.temp.day}
                  icon={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${first.weather[0].icon}.svg`}
                  description={first.weather[0].main}
                />
              ))
          : ""}
      </div>

      <div className="forecast-display">
        {/* Displaying forecasted data */}

        {tempData
          ? tempData.daily
              .slice(1, 5)
              .map((day, i) => (
                <Forecast
                  key={i}
                  dt={day.dt}
                  temp={day.temp.day}
                  icon={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${day.weather[0].icon}.svg`}
                />
              ))
          : ""}
      </div>
    </div>
  );
};

export default Weather;
