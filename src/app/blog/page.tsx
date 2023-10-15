import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlogCards from "@/components/blog/blogCards";
import getBlogMetadata from "@/components/metadataFunctions/getBlogMetadata";

const blogMetadata = getBlogMetadata();

const postPreviews = blogMetadata.map((post) => (
  <BlogCards key={post.slug} {...post} blogSlug={post.slug} />
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
