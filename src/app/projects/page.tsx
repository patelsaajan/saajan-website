import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function projects() {
  return (
    <Container maxWidth="sm" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Projects
        </Typography>
      </Box>
    </Container>
  );
}
