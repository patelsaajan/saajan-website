import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BriefCard from "@/components/Cookbook/briefCard";
import foodData from "@/components/data/food";

export default function blog() {
  return (
    <Container maxWidth="lg" sx={{ mt: "40px" }}>
      <Box
        sx={{
          display: "flex column",
          justifyContent: "center",
          textAlign: "center",
          //   border: "1px solid red",
        }}
      >
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Cookbook
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {foodData.map((recipe) => (
            <BriefCard
              primaryDish={recipe.primaryDish}
              secondaryDish={recipe.secondaryDish}
              foodIamge={recipe.imageSrc}
              desc={recipe.desc}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
