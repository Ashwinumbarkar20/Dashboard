import React from "react";
import "./Content.css";

import Paper from "@mui/material/Paper";
import Path from "../Path/Path";
import Student from "../Student/Student";
import Performance from "./Performace/Performance";
import data from "../../Performacedata.json";
import TestData from "../../Testdata.json";
import Progress from "../../Progress.json";
import Chartscontainer from "../Chartscontainer/Chartscontainer";
import Levelchart from "../Levelwisechart/Levelchart";
import Engagement from "../Engagement/Engagement";
export default function Content() {
  return (
    <Paper
      elevation={10}
      sx={{
        width: "93%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Path />
      <Student />
      <Performance title="Assignments" data={data} />
      <Performance title="Total Tests" data={TestData} />
      <Chartscontainer />
      <Paper
        elevation={3}
        sx={{ width: "99%", padding: "10px", margin: "10px" }}
      >
        <Performance title="Progress" data={Progress} />

        <Levelchart />
      </Paper>
      <Engagement />
    </Paper>
  );
}
