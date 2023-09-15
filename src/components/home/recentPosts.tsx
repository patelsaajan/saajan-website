"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

const RecentPosts = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "secondary.main" }}>
      <Typography fontSize={22} color={"#21243D"} mt={"60px"}>
        Recent Posts
      </Typography>
      <Box sx={{ display: "flex", mt: "25px" }}>Hello World</Box>
    </Container>
  );
};

export default RecentPosts;
