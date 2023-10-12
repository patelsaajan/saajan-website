import { Box, Container, Typography } from "@mui/material";
import React from "react";
import foodData from "@/components/data/food";
import getRecipeMetadata from "@/components/metadataFunctions/getRecipeMetadata";
import RecipeCard from "@/components/Cookbook/recipeCard";

const recipeMetadata = getRecipeMetadata();

export default function blog() {
  const recipePreview = recipeMetadata.map((recipe) => (
    <RecipeCard
      key={recipe.slug}
      name={recipe.name}
      desc={recipe.desc}
      imageString={recipe.imageString}
      recipeLink={recipe.slug}
    />
  ));
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
          {recipePreview}
        </Box>
      </Box>
    </Container>
  );
}
