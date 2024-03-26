import React from "react";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button, FormControl, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import Progressbar from "../Progress/Progressbar";
import studentpic from '../../../public/profile.avif'
import "./Student.css";
export default function Student() {
  let topics = { total: "55", completed: "20" };
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "99%",
          marginTop: "10px",
          display: "flex",
          msFlexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="Student_info">
          <div className="Student">
            <div className="Student_profile">
              <img className="studentimg"src={studentpic} alt="Student-Picture" />
            </div>
            <div className="Student-details">
              <p className="Student_name">Student Name</p>
              <div className="Student-acadimics">
                <p className="Student_grades">Grade-6</p>
                <p className="Student_Topics">Topics- 22 / 55</p>
              </div>
              <div className="Total-progress" style={{ width: "100%" }}>
                {" "}
                <Progressbar
                  completed={topics.completed}
                  total={topics.total}
                />
              </div>
            </div>
            <div className="Search-list">
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ minWidth: "150px" }}>
                  <InputLabel id="demo-simple-select-label">
                    Curriculum List
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="Age"
                    label="Age"
                    onChange={"handleChange"}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: "150px" }}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="Age"
                    label="age"
                    onChange={"handleChange"}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="outlined" sx={{ minWidth: "100px" }}>
                  <SearchIcon />
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}
