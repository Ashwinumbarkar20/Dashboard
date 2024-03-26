/* eslint-disable react/prop-types */
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "./Donutchart.css";
import { Paper } from "@mui/material";

export default function Donutchart({
  title,
  AnswerData,
  height,
  width,
  innerradius,
  elevation,
  label,
}) {
  const colors = [
    "#0088FE",
    "#FF8042",
    "green",
    "blue",
    "red",
    "yellow",
    "pink",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <Paper elevation={elevation}>
        <h3 className="title">{title}</h3>

        <div className="pieChartcontainer">
          {" "}
          <PieChart width={width} height={height}>
            <Pie
              data={AnswerData}
              cx="50%"
              cy="50%"
              innerRadius={innerradius}
              outerRadius={100}
              labelLine={false}
              label={label ? renderCustomizedLabel : false}
            >
              {AnswerData.map((entry, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </Paper>
    </>
  );
}
