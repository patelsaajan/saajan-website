import { Box, Container, Typography } from "@mui/material";
import React from "react";
import matter from "gray-matter";

interface pagePromps {
  params: { projectName: string };
}

const page = ({ params }: pagePromps) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex column",
          border: "1px solid red",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">{params.projectName} </Typography>
      </Box>
    </Container>
  );
};

export default page;
