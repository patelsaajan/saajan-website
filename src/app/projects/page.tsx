import BriefProjectCards from "@/components/projects/briefProjectCards";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import getPostMetadata from "@/components/metadataFunctions/getPostMetadata";
import { generateStaticParams } from "@/components/metadataFunctions/getPostContent";

const postMetadata = getPostMetadata("markdownFiles/projects/");

generateStaticParams();

export default function projects() {
  const postMetadataObject = postMetadata;
  postMetadataObject.sort((objA, objB) => {
    return objA.order - objB.order;
  });
  const postPreviews = postMetadataObject.map((post) => (
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
