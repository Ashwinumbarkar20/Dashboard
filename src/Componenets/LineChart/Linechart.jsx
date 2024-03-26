/* eslint-disable react/prop-types */
import React from "react";
import { Paper } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
export default function Linechart({ title, data }) {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "px",
          flexDirection: "column",
        }}
      >
        <h2 className="title">{title}</h2>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#0088FE"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Cgpa"
            stroke="#FF8042"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Paper>
    </>
  );
}
