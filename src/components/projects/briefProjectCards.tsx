"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  title: string;
  date: string;
  desc: string;
  imageSrc: string;
};

const BriefProjectCards = ({ title, date, desc, imageSrc }: cardPrompts) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        mb: "20px",
        display: "flex",
        border: "2px solid black",
        p: "10px",
        gap: "20px",
        borderRadius: "16px",
        transition: "200ms all ease-out",
        "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
      }}
    >
      {isMobile ? (
        <></>
      ) : (
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt={"picture of the 3pi+ robot"}
          style={{ border: "2px solid black", borderRadius: "16px" }}
        />
      )}
      <Box
        sx={{
          display: "flex column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "text.secondary",
            color: "#FFFF",
            px: "10px",
            pt: "1.5px",
            borderRadius: "16px",
            fontSize: "small",
            fontWeight: "800",
            width: "80px",
            my: "10px",
          }}
        >
          {date}
        </Typography>
        <Typography>{desc}</Typography>
      </Box>
    </Box>
  );
};

export default BriefProjectCards;
