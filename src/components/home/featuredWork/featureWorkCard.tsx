"use client";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  title: string;
  year: string;
  tags: string;
  body: string;
  imageSrc: string;
};

const FeatureWorkCard = ({
  title,
  year,
  tags,
  body,
  imageSrc,
}: cardPrompts) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: " flex",
        p: "20px",
        gap: "20px",
        transition: "all 200ms ease-out",
        borderRadius: "16px",
        "&:hover": {
          boxShadow: 3,
          // backgroundColor: "secondary.main",
          cursor: "pointer",
        },
      }}
    >
      {isMobile ? (
        <></>
      ) : (
        <Image
          alt={"feature work image"}
          width={246}
          height={180}
          src={imageSrc}
          style={{ borderRadius: "8px" }}
        />
      )}
      <Box sx={{ display: "flex column" }}>
        <Typography variant="h5" fontWeight={"800"}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", mt: "20px" }}>
          <Box
            sx={{
              backgroundColor: "text.secondary",
              color: "#FFFF",
              px: "10px",
              pt: "1.5px",
              borderRadius: "16px",
              fontSize: "small",
              fontWeight: "800",
            }}
          >
            {year}
          </Box>
          <Typography sx={{ color: "#8695A4" }}>{tags}</Typography>
        </Box>
        <Typography mt="20px" color="#21243D" sx={{ fontSize: "small" }}>
          {body}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureWorkCard;
