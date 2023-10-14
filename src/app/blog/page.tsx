import { Box, Container, Typography } from "@mui/material";
import React from "react";
import blogData from "@/components/data/blog";
import BlogCards from "@/components/blog/blogCards";
import matter from "gray-matter";
import fs from "fs";
import { BlogMetadata } from "@/components/metadataFunctions/interfaces/blogMetadataInterface";
import path from "path";
import getBlogMetadata from "@/components/metadataFunctions/getBlogMetadata";

const blogMetadata = getBlogMetadata();

const postPreviews = blogMetadata.map((post) => (
  <BlogCards key={post.slug} {...post} />
));

export default function blog() {
  return (
    <Container maxWidth="sm" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Blog
        </Typography>
      </Box>
      {postPreviews}
    </Container>
  );
}
