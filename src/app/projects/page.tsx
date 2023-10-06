import BriefProjectCards from "@/components/projects/briefProjectCards";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import getPostMetadata from "@/components/getPostMetadata";

const postMetadata = getPostMetadata("./posts/projectsMarkdownFiles");

export default function projects() {
  const postPostMetadata = postMetadata;
  const postPreviews = postPostMetadata.map((post) => (
    <BriefProjectCards key={post.slug} {...post} projectURL={post.slug} />
  ));
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "40px" }}>
        <Box sx={{ display: "flex column" }}>
          <Typography sx={{}} variant={"h4"} fontWeight={"800"} mb="30px">
            Projects
          </Typography>
          {postPreviews}
        </Box>
      </Container>
    </>
  );
}
