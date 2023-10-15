import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlogCards from "@/components/blog/blogCards";
import getDiaryMetadata from "@/components/metadataFunctions/getDiaryMetadata";

const diaryMetadata = getDiaryMetadata();

const postPreviews = diaryMetadata.map((post) => (
  <BlogCards key={post.slug} {...post} blogSlug={post.slug} folder="diary" />
));

export default function blog() {
  return (
    <Container maxWidth="sm" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Diary of an indian kid
        </Typography>
      </Box>
      {postPreviews}
    </Container>
  );
}
