import React from "react";
import { Paper } from "@mui/material";

import Donutchart from "../Donutchart/Donutchart";
import Linechart from "../LineChart/Linechart.jsx";
export default function Levelchart() {
  const Data = [
    { name: "Correct", value: 40 },
    { name: "Incorrect", value: 60 },
  ];
  const MonthlyData = [
    { name: "Jan", score: 70, Cgpa: 23 },
    { name: "Feb", score: 65, Cgpa: 22 },
    { name: "Mar", score: 80, Cgpa: 65 },
    { name: "Apr", score: 75, Cgpa: 23 },
    { name: "May", score: 85, Cgpa: 74 },
    { name: "Jun", score: 90, Cgpa: 23 },
    { name: "Jul", score: 85, Cgpa: 93 },
  ];
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          margin: "10px",
          width: "99%",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-evenly",
          gap: "10px",
          flexDirection: "row",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <Donutchart
          title="Level With Topics"
          AnswerData={Data}
          height={300}
          width={600}
          innerradius={0}
          elevation={3}
        />

        <Linechart title="Month-wise" data={MonthlyData} />
      </Paper>
    </>
  );
}
