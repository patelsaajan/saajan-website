"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardPrompts = {
  name: string;
  imageString: string;
  desc: string;
  recipeLink: string;
};

const RecipeCard = ({ name, imageString, desc, recipeLink }: cardPrompts) => {
  const theme = useTheme();
  return (
    <Link href={`/cookbook/${recipeLink}`}>
      <Box
        sx={{
          display: "flex column",
          border: "3px solid black",
          boxShadow: 1,
          width: "280px",
          justifyContent: "center",
          p: "10px",
          m: "20px",
          transition: "200ms all ease-in",
          borderRadius: "16px",
          "&:hover": {
            border: `3px solid ${theme.palette.primary.main}`,
            cursor: "pointer",
          },
        }}
      >
        <Image
          src={imageString}
          width={200}
          height={200}
          alt="test image of food"
          style={{ borderRadius: "16px" }}
        />
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify", mt: "10px" }}>
          {desc}
        </Typography>
      </Box>
    </Link>
  );
};

export default RecipeCard;
