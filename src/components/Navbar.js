import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <FastfoodIcon sx={{ mr: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Меню ресторана
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
