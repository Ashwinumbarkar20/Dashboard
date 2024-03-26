/* eslint-disable react/prop-types */
import React from "react";
import { Paper } from "@mui/material";
import Cards from "../../Cards";
import { Analytics } from "@mui/icons-material";
import "./Performance.css";
export default function Performance({ title, data }) {
  console.log(data);
  return (
    <>
      {data.length !== 0 && (
        <>
          <Paper
            elevation={3}
            sx={{
              margin: "10px",
              width: "99%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
              padding: "5px",
            }}
          >
            <p className="Title">{title}</p>
            <div className="Card-container">
              {data.map((Data) => (
                <Cards
                  key={Data.title}
                  Data={Data}
                  icon={
                    <Analytics style={{ fontSize: "50px", color: "#0d47a1" }} />
                  }
                />
              ))}
            </div>
          </Paper>
        </>
      )}
    </>
  );
}
