"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  imageString: string;
  ingredientsArray: string[];
  story: string;
};

const RecipeHero = ({ imageString, ingredientsArray, story }: cardPrompts) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Image
        src={imageString}
        width={largeScreen ? 450 : 300}
        height={largeScreen ? 450 : 300}
        alt="picture of food"
        style={{ borderRadius: "16px" }}
      />
      <Box
        sx={{
          display: isMobile ? "flex column" : "flex",
          justifyContent: "center",
          marginY: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex column",
            minWidth: "40%",
            padding: "10px",
            margin: "5px",
            backgroundColor: "primary.main",
            borderRadius: "16px",
            color: "white",
          }}
        >
          <Typography variant="h6">Ingredients</Typography>
          {ingredientsArray.map((item: string) => (
            <Typography sx={{ marginTop: "20px" }}>{item}</Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex column",
            // border: "1px solid blue",
            padding: "10px",
            margin: "5px",
          }}
        >
          <Typography variant="h6">Backstory</Typography>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            {story}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default RecipeHero;
