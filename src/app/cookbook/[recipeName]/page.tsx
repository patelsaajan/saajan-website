import RecipeHero from "@/components/Cookbook/recipeHero";
import getRecipeContent from "@/components/metadataFunctions/getRecipeContent";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import React from "react";

interface pagePromps {
  params: { recipeName: string };
}

const page = ({ params }: pagePromps) => {
  const slug = params.recipeName;
  const recipe = getRecipeContent(slug);
  // console.log(recipe.data.imageString);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex column",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ paddingY: "50px" }}>
          {recipe.data.name}
        </Typography>

        <RecipeHero
          imageString={recipe.data.imageString}
          ingredientsArray={recipe.data.ingredients}
          story={recipe.data.story}
        />

        <Markdown>{recipe.content}</Markdown>
      </Box>
    </Container>
  );
};

export default page;

// <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             marginY: "30px",
//           }}
//         >
//           <Image
//             src={"/imgs/food/foodimage1.jpeg"}
//             width={300}
//             height={300}
//             alt="picture of food"
//             style={{ borderRadius: "16px" }}
//           />

//           <Box sx={{ display: "flex column", width: "45%" }}>
//             {" "}
//             <Typography variant="h6">Backstory</Typography>
//             <Typography variant="body2" sx={{ textAlign: "justify" }}>
//               This is where the text about the food item will go it will be
//               loaded from the grey matter of the markdown file and then be
//               loaded using code. This is where the text about the food item will
//               go it will be loaded from the grey matter of the markdown file and
//               then be loaded using code. This is where the text about the food
//               item will go it will be loaded from the grey matter of the
//               markdown file and then be loaded using code.
//             </Typography>
//           </Box>
//         </Box>
