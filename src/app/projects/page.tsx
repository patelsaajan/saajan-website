import BriefProjectCards from "@/components/projects/briefProjectCards";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { PostMetadata } from "@/components/PostMetadata";
import getPostMetadata from "@/components/getPostMetadata";

const postMetadata = getPostMetadata("src/components/data/blogPosts/");

export default function projects() {
  const postPostMetadata = postMetadata;
  const postPreviews = postPostMetadata.map((project) => (
    <BriefProjectCards
      title={project.title}
      active={project.active}
      date={project.date}
      desc={project.desc}
      tags={project.tags}
      imageSrc={project.imageSrc}
      projectURL={project.slug}
    />
  ));
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "40px" }}>
        <Box sx={{ display: "flex column" }}>
          <Typography variant={"h4"} fontWeight={"800"} mb="30px">
            Projects
          </Typography>
          {postPreviews}
        </Box>
      </Container>
    </>
  );
}
