"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF6464",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#581eca",
    },
  },
});

const MUIThemeProvider = ({ children }: any) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MUIThemeProvider;
