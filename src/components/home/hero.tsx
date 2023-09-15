"use client";

import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const HomeHero = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid",
          textAlign: { xs: "center", lg: "left" },
          mt: "150px",
          gap: { xs: "60px", lg: "0px" },
        }}
      >
        <Box>
          <Typography variant="h3">Hi, i am Saajan,</Typography>
          <Typography variant="h4">Bristol Univeristy MEng graduate</Typography>
          <Typography variant="body1" py={"20px"} textAlign={"justify"}>
            This is where some text will go that will talk about me and my
            interests so that the reader can get an idea of what the website is
            for and why it was created. This is where some text will go that
            will talk about me and my interests so that the reader can get an
            idea of what the website is for and why it was created.This is where
            some text will go that will talk about me and my interests so that
            the reader can get an idea of what the website is for and why it was
            created.
          </Typography>

          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "#FFFF",
              width: "208px",
              height: "50",
              fontWeight: "400",
              borderRadius: "20px",
              transition: "all 200ms ease-out",
              "&:hover": {
                backgroundColor: "primary.main",
                transform: "scale(1.1)",
                borderRadius: "5px",
                fontWeight: "600",
              },
            }}
          >
            Download CV
          </Button>
        </Box>

        <Image
          alt={"photo of myself during my graduation"}
          width={400}
          height={400}
          src={"/imgs/heroPhoto.jpg"}
          style={{ borderRadius: "50%", border: "5px solid rgb(255, 0, 0)" }}
        />
      </Box>
    </Container>
  );
};

export default HomeHero;
