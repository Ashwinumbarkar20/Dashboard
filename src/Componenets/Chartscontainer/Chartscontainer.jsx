import React from "react";
import { Paper } from "@mui/material";

import "./Chartscontainer.css";
import Donutchart from "../Donutchart/Donutchart";
import Gaugechart from "../Gaugechart/Gaugechart";
export default function Chartscontainer() {
  const AnswerData = [
    { name: "Correct", value: 70 },
    { name: "Incorrect", value: 30 },
  ];
  const Effiecency = [
    { name: "Correct", value: 40 },
    { name: "Incorrect", value: 60 },
  ];
  const ScoreData = [
    { name: "0-20", value: 20, fill: "#FF5733" },
    { name: "21-40", value: 20, fill: "#FFA533" },
    { name: "41-60", value: 20, fill: "#FFFF33" },
    { name: "61-80", value: 20, fill: "#A0FF33" },
    { name: "81-100", value: 20, fill: "#33FF57" },
  ];
  const TimeData = [
    { name: "0-20", value: 2, fill: "#FF5733" },
    { name: "21-40", value: 2, fill: "#FFA533" },
    { name: "41-60", value: 2, fill: "#FFFF33" },
    { name: "61-80", value: 2, fill: "#A0FF33" },
    { name: "81-100", value: 2, fill: "#33FF57" },
  ];
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          margin: "10px",
          width: "99%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "10px",
          flexDirection: "row",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <Donutchart
          title="Correct/Wrong"
          AnswerData={AnswerData}
          height={300}
          width={300}
          innerradius={0}
          elevation={3}
        />
        <Donutchart
          title="Efficiency"
          AnswerData={Effiecency}
          height={300}
          width={300}
          innerradius={0}
          elevation={3}
        />
        <Gaugechart score={70} data={ScoreData} title="Total Score" />
        <Gaugechart score={4} data={TimeData} title="Time per Question" />
      </Paper>
    </>
  );
}
