import { Box, Container } from "@mui/material";
import React from "react";

interface pagePromps {
  params: { recipeName: string };
}

const page = ({ params }: pagePromps) => {
  const slug = params.recipeName;
  return (
    <Container>
      <Box>This is where food stuff goes</Box>
    </Container>
  );
};

export default page;
