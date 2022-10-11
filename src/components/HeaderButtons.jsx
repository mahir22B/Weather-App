import React, { useState } from "react";
import "../styles/header.css";

const HeaderButtons = ({ setPlace }) => {
  const [active, setActive] = useState(1);

  const dataSet = (city) => {
    setPlace([city.title, city.lat, city.lon]);
  };

  const idSet = (city) => {
    setActive(city.id);
  };

  const cities = [
    {
      id: 1,
      title: "NEW YORK",
      lat: 43.0,
      lon: -75.0,
    },
    {
      id: 2,
      title: "OTTAWA",
      lat: 45.42,
      lon: -75.69,
    },
    {
      id: 3,
      title: "TORONTO",
      lat: 43.65,
      lon: -79.34,
    },
  ];

  return (
    <div className="header-btn">
      {cities.map((city) => (
        <div
          key={city.id}
          className={city.id === active ? "selected" : ""}
          onClick={() => {
            dataSet(city);
            idSet(city);
          }}
        >
          {city.title}
        </div>
      ))}
    </div>
  );
};

export default HeaderButtons;
