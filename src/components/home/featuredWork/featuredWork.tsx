import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import FeatureWorkCard from "./featureWorkCard";
import featuredWorkData from "@/components/data/featuredWork";

const FeaturedWork = () => {
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
              year={data.year}
              tags={data.tags}
              body={data.body}
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
