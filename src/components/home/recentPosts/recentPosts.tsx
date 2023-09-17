"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import RecentPostCard from "./recentPostCard";
import postDataArray from "@/components/data/posts";

const RecentPosts = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", backgroundColor: "secondary.main" }}>
      <Container
        maxWidth="lg"
        sx={{
          p: "30px",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={22} color={"#21243D"}>
            Recent Posts
          </Typography>
          <Typography>View all</Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex column", md: "flex" },
            flexWrap: { xs: "nowrap", md: "wrap" },
            gap: "20px",
            pt: "20px",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {postDataArray.map((card) => (
            <RecentPostCard
              title={card.title}
              date={card.date}
              tags={card.tags}
              body={card.body}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default RecentPosts;
