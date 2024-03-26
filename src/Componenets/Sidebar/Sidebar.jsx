import React from "react";
import "./Sidebar.css";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

export default function Sidebar() {
  return (
    <div className="Sidebar-div">
      <ul>
        <li>
          <div className="menu-item">
            <DashboardCustomizeOutlinedIcon className="sidebar-icon" />
            <p>Dashboard</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <PendingActionsOutlinedIcon />
            <p>Todo</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <LibraryBooksOutlinedIcon />
            <p>Library</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <EventNoteOutlinedIcon />
            <p>Planner</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Analytics</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Assignemnt</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Doubt</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Item</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Item</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Item</p>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <AssessmentOutlinedIcon />
            <p>Item</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
