import { Box, Container, Typography } from "@mui/material";
import React from "react";
import blogData from "@/components/data/blog";

export default function blog() {
  return (
    <Container maxWidth="sm" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Cookbook
        </Typography>
      </Box>
    </Container>
  );
}
