import getRecipeContent from "@/components/metadataFunctions/getRecipeContent";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Markdown from "markdown-to-jsx";
import React from "react";

interface pagePromps {
  params: { recipeName: string };
}

const page = ({ params }: pagePromps) => {
  const slug = params.recipeName;
  const recipe = getRecipeContent(slug);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex column",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <Typography variant="h3">{recipe.data.name}</Typography>
        <Markdown>{recipe.content}</Markdown>
      </Box>
    </Container>
  );
};

export default page;

// <Image
// src={"/imgs/food/foodImage1.jpeg"}
// width={300}
// height={300}
// alt="test image of food"
// style={{ borderRadius: "16%", marginTop: "30px" }}
// />

// <Box sx={{ display: "flex", marginTop: "30px" }}>
// <Box
//   sx={{
//     display: "flex column",
//     width: "50%",
//     borderRadius: "16px",
//     backgroundColor: "primary.main",
//     color: "white",
//   }}
// >
//   <Typography variant="h6">Ingredients</Typography>
//   {ingredients.map((item) => (
//     <Typography>{item}</Typography>
//   ))}
// </Box>
// <Box
//   sx={{
//     display: "flex column",
//     width: "50%",
//     // border: "1px solid green",
//   }}
// >
//   <Typography variant="h6">Backstory</Typography>
//   <Typography
//     variant="body2"
//     sx={{ textAlign: "justify", padding: "10px" }}
//   >
//     This is where a story story about how the recipe was made and any
//     other additional info id like to add to it. I think itll be a nice
//     little note to include on the recipe
//   </Typography>
// </Box>
// </Box>
// <Box
// sx={{
//   display: "flex column",
//   border: "1px solid red",
//   marginTop: "30px",
// }}
// >
// <Typography variant="h6">Method</Typography>
// </Box>
