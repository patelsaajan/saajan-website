"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  primaryDish: string;
  secondaryDish: string;
  foodIamge: string;
  desc: string;
};

const BriefCard = ({
  primaryDish,
  secondaryDish,
  foodIamge,
  desc,
}: cardPrompts) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex column",
        border: "2px solid black",
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
        src={foodIamge}
        width={200}
        height={200}
        alt="test image of food"
        style={{ border: "1px solid black", borderRadius: "16px" }}
      />
      <Typography variant="h5" fontWeight={700}>
        {primaryDish}
      </Typography>
      <Typography variant="body1" fontWeight={600}>
        {secondaryDish}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "justify", mt: "10px" }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default BriefCard;