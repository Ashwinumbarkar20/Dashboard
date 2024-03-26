import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            bgcolor: "#FFF",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Typography variant="h6" noWrap>
            Logo
          </Typography>
          <Box
            size="large"
            aria-label="search"
            color="inherit"
            sx={{
              border: "1px solid black",
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <SearchIcon color="primary" />
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ padding: "1px 10px" }}
            />
          </Box>

          <Stack direction="row" spacing={5}>
            <div className="menuitemstyles">
              <MenuBookOutlinedIcon className="iconstyle" />
              <NavLink className="Menu-item" to="#" color="inherit">
                Curriculam
              </NavLink>
            </div>
            <div className="menuitemstyles">
              <GroupWorkOutlinedIcon className="iconstyle" />
              <NavLink className="Menu-item" to="#" color="inherit">
                Community
              </NavLink>
            </div>
            <div className="menuitemstyles">
              <AccountBalanceOutlinedIcon className="iconstyle" />
              <NavLink className="Menu-item" to="#" color="inherit">
                Campus
              </NavLink>
            </div>
            <div className="menuitemstyles">
              <SelfImprovementOutlinedIcon className="iconstyle" />
              <NavLink className="Menu-item" to="#" color="inherit">
                Activity
              </NavLink>
            </div>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Stack direction="row" spacing={5}>
            <div className="menuitemstyles">
              <Diversity2OutlinedIcon className="iconstyle" />
              <NavLink className="Menu-item" to="#" color="inherit">
                My Circle
              </NavLink>
            </div>
            <div className="menuitemstyles">
              <LiveHelpOutlinedIcon className="iconstyle" />
              <NavLink className="Menu-item" to="#" color="inherit">
                Doubt
              </NavLink>
            </div>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={"handleMenu"}
              color="inherit"
            >
              <div>
                <AccountCircle />
                <p style={{ fontSize: "12px" }}>User Name</p>
                <p style={{ fontSize: "12px" }}>1011 Points</p>
              </div>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <div>
                <NotificationsIcon />
                <p style={{ fontSize: "12px" }}>Notice</p>
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
