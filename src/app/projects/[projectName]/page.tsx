import { Container, Typography } from "@mui/material";
import React from "react";
import Markdown from "markdown-to-jsx";
import getPostContent from "@/components/metadataFunctions/getPostContent";
import getPostMetadata from "@/components/metadataFunctions/getPostMetadata";
import path from "path";

interface pagePromps {
  params: { projectName: string };
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata(
    path.join(process.cwd(), "/markdownFiles/projects/")
  );
  return posts.map((post) => ({ slug: post.slug }));
};

const page = ({ params }: pagePromps) => {
  const slug = params.projectName;
  const post = getPostContent(slug);
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        sx={{ textAlign: "center", my: "40px", fontWeight: "600" }}
      >
        {post.data.title}
      </Typography>
      <Markdown>{post.content}</Markdown>
    </Container>
  );
};

export default page;
