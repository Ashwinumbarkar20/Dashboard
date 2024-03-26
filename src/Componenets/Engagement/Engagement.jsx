import { Paper } from "@mui/material";
import React from "react";
import Donutchart from "../Donutchart/Donutchart";
import "./Engagement.css";
export default function Engagement() {
  const TotalEngagementData = [
    { name: "Video", value: 40 },
    { name: "AI", value: 60 },
    { name: "Test", value: 40 },
    { name: "Assignement", value: 40 },
    { name: "Group Study", value: 40 },
    { name: "Doubt", value: 40 },
    { name: "Answer", value: 40 },
  ];
  const profit = [
    { name: "Video", value: 40 },
    { name: "AI", value: 60 },
    { name: "Test", value: 40 },
  ];
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          margin: "10px",
          width: "99%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          flexDirection: "row",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <p className="Title">Engagement</p>
        <div className="contianer">
          <Donutchart
            title="Total Engagement"
            AnswerData={TotalEngagementData}
            height={300}
            width={600}
            innerradius={30}
            elevation={3}
            label={true}
          />
          <Donutchart
            title="Gain/Loss"
            AnswerData={profit}
            height={300}
            width={600}
            innerradius={0}
            elevation={3}
            label={true}
          />
        </div>
      </Paper>
    </>
  );
}
