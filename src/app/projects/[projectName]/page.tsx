import { Box, Container, Typography } from "@mui/material";
import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostConent = (slug: string) => {
  const folder = "src/components/data/blogPosts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

interface pagePromps {
  params: { projectName: string };
}

const page = ({ params }: pagePromps) => {
  const slug = params.projectName;
  const content = getPostConent(slug);
  return (
    <Container maxWidth="lg">
      <Markdown>{content}</Markdown>
    </Container>
  );
};

export default page;
