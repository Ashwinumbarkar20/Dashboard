/* eslint-disable react/prop-types */
import React from "react";
import "./Cards.css";
export default function Cards({ Data, icon }) {
  return (
    <div className="Card">
      <div>{icon}</div>
      <div className="CardData">
        <p className="value">{Data.value}</p>
        <p className="Card-title">{Data.title}</p>
      </div>
    </div>
  );
}
