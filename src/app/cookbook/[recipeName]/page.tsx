"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

interface pagePromps {
  params: { recipeName: string };
}

const ingredients = ["pasta", "avo", "butter", "eggs", "milk"];

const page = ({ params }: pagePromps) => {
  const slug = params.recipeName;
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex column",
          // border: "2px solid red",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <Typography variant="h3">Name of the dish</Typography>
        <Image
          src={"/imgs/food/foodImage1.jpeg"}
          width={300}
          height={300}
          alt="test image of food"
          style={{ borderRadius: "16%", marginTop: "30px" }}
        />

        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <Box
            sx={{
              display: "flex column",
              width: "50%",
              borderRadius: "16px",
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            <Typography variant="h6">Ingredients</Typography>
            {ingredients.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex column",
              width: "50%",
              // border: "1px solid green",
            }}
          >
            <Typography variant="h6">Backstory</Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", padding: "10px" }}
            >
              This is where a story story about how the recipe was made and any
              other additional info id like to add to it. I think itll be a nice
              little note to include on the recipe
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default page;
