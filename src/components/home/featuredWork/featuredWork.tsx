import { Box, Container, Fab, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FeaturedWork = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <Box
        sx={{
          display: "flex column",
          border: "2px solid rgb(255, 0, 0)",
        }}
      >
        <Typography fontSize={22} color={"#21243D"}>
          Featured works
        </Typography>
        <Box
          sx={{
            display: " flex",
            border: "2px solid rgb(0, 255, 0)",
            mt: "20px",
            gap: "20px",
          }}
        >
          <Image
            alt={"feature work image"}
            width={246}
            height={180}
            src={"/imgs/featuredWork/image1.png"}
          />
          <Box
            sx={{ display: "flex column", border: "2px solid rgb(0, 0, 255)" }}
          >
            <Typography variant="h5" fontWeight={"800"}>
              title
            </Typography>
            <Box sx={{ display: "flex", gap: "20px", mt: "20px" }}>
              <Box
                sx={{
                  backgroundColor: "#142850",
                  color: "#FFFF",
                  px: "10px",
                  pt: "1.5px",
                  borderRadius: "16px",
                  fontSize: "small",
                  fontWeight: "800",
                }}
              >
                year
              </Box>
              <Typography sx={{ color: "#8695A4" }}>Dashboard</Typography>
            </Box>
            <Typography mt="20px" color="#21243D" sx={{ fontSize: "small" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FeaturedWork;
