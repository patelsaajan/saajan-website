import BriefProjectCards from "@/components/projects/briefProjectCards";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import projectsData from "@/components/data/projectData";
import matter from "gray-matter";
import fs from "fs";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/components/data/blogPosts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith("md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `src/components/data/blogPosts//${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      active: matterResult.data.active,
      tags: matterResult.data.tags,
      imageSrc: matterResult.data.imageSrc,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default function projects() {
  const postPostMetadata = getPostMetadata();
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
    // <Typography>{project.tags}</Typography>
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
