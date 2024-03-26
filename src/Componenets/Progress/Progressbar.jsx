/* eslint-disable react/prop-types */
import React from "react";

export default function Progressbar({ completed, total }) {
  const progress = (completed / total) * 100;
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#f0f0f0",
          borderRadius: "1px",
          border: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#00bcd4",
            height: "10px",
            borderRadius: "1px",
            textAlign: "center",
            lineHeight: "30px",
            color: "#fff",
          }}
        ></div>
      </div>
      {`${progress.toFixed(2)}%`}
    </>
  );
}
