import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FeatureWorkCard from "./featureWorkCard";
import featuredWorkData from "@/components/data/featuredWork";

const FeaturedWork = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <Box
        sx={{
          display: "flex column",
        }}
      >
        <Typography
          fontSize={22}
          color={"#21243D"}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Featured works
        </Typography>

        {featuredWorkData.map((data) => (
          <FeatureWorkCard
            title={data.title}
            year={data.year}
            tags={data.tags}
            body={data.body}
            imageSrc={data.imageSrc}
          />
        ))}
      </Box>
    </Container>
  );
};

export default FeaturedWork;
