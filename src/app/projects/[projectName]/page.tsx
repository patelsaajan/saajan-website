import { Box, Container, Typography } from "@mui/material";
import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import path from "path";

const getPostConent = (slug: string) => {
  const folder = path.join(process.cwd(), "posts/projectsMarkdownFiles/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata(
    path.join(process.cwd(), "posts/projectsMarkdownFiles")
  );
  return posts.map((post) => ({ slug: post.slug }));
};

interface pagePromps {
  params: { projectName: string };
}

const page = ({ params }: pagePromps) => {
  const slug = params.projectName;
  const post = getPostConent(slug);
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
