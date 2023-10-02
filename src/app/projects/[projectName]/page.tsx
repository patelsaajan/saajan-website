import { Box, Container, Typography } from "@mui/material";
import { parse } from "path";
import React from "react";
import { Route } from "react-router-dom";

interface pagePromps {
  params: { projectName: string };
}

const page = ({ params }: pagePromps) => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography>othername is: {params.projectName} </Typography>
      </Box>
    </Container>
  );
};

export default page;
