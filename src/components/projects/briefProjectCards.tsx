"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  title: string;
  date: string;
  desc: string;
  imageSrc: string;
  active: boolean;
  tags: string[];
};

const BriefProjectCards = ({
  title,
  date,
  desc,
  active,
  imageSrc,
  tags,
}: cardPrompts) => {
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
        alignItems: "center",
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
        <Box sx={{ display: "flex" }}>
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
          {active ? (
            <Typography
              sx={{
                backgroundColor: "green",
                width: "100px",
                px: "10px",
                pt: "1.5px",
                color: "#FFFF",
                textAlign: "center",
                ml: "10px",
                borderRadius: "16px",
                fontSize: "small",
                fontWeight: "800",
                my: "10px",
              }}
            >
              In Progress
            </Typography>
          ) : (
            <></>
          )}

          {tags.map((tag) => (
            <Typography
              sx={{
                backgroundColor: "primary.main",
                px: "10px",
                pt: "1.5px",
                color: "#FFFF",
                textAlign: "center",
                ml: "10px",
                borderRadius: "16px",
                fontSize: "small",
                fontWeight: "800",
                my: "10px",
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
        <Typography>{desc}</Typography>
      </Box>
    </Box>
  );
};

export default BriefProjectCards;
