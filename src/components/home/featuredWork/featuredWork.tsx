import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import FeatureWorkCard from "./featureWorkCard";
import featuredWorkData from "@/components/data/featuredWork";
import getPostMetadata from "@/components/metadataFunctions/getPostMetadata";
import BriefProjectCards from "@/components/projects/briefProjectCards";

// const postMetadata = getPostMetadata("src/components/data/blogPosts");

const FeaturedWork = () => {
  // const postPostMetadata = postMetadata;
  // const postPreviews = postPostMetadata.map((project) => (
  //   <BriefProjectCards
  //     title={project.title}
  //     active={project.active}
  //     date={project.date}
  //     desc={project.desc}
  //     tags={project.tags}
  //     imageSrc={project.imageSrc}
  //     projectURL={project.slug}
  //   />
  // ));
  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px", marginBottom: "30px" }}>
      <Box
        sx={{
          display: "flex column",
        }}
      >
        <Typography
          variant="h4"
          color={"#21243D"}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Featured works
        </Typography>

        {featuredWorkData.map((data, i) => (
          <>
            <FeatureWorkCard
              key={i}
              projectURL={data.projectURL}
              title={data.title}
              date={data.year}
              tags={data.tags}
              desc={data.body}
              imageSrc={data.imageSrc}
            />
            <Divider />
          </>
        ))}
      </Box>
    </Container>
  );
};

export default FeaturedWork;
