import { Box, Container, Typography } from "@mui/material";
import React from "react";
import foodData from "@/components/data/food";
import getRecipeMetadata from "@/components/metadataFunctions/getRecipeMetadata";
import RecipeCard from "@/components/Cookbook/recipeCard";

const recipeMetadata = getRecipeMetadata();

export default function blog() {
  return (
    <Container maxWidth="lg" sx={{ mt: "40px" }}>
      <Box
        sx={{
          display: "flex column",
          justifyContent: "center",
          textAlign: "center",
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
            <RecipeCard
              name={recipe.primaryDish}
              imageString={recipe.imageSrc}
              desc={recipe.desc}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
