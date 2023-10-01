import BriefProjectCards from "@/components/projects/briefProjectCards";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import projectsData from "@/components/data/projectData";

export default function projects() {
  return (
    <Container maxWidth="lg" sx={{ mt: "40px" }}>
      <Box sx={{ display: "flex column" }}>
        <Typography variant={"h4"} fontWeight={"800"} mb="30px">
          Projects
        </Typography>
        {projectsData.map((project) => (
          <BriefProjectCards
            title={project.title}
            date={project.date}
            desc={project.desc}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </Container>
  );
}
