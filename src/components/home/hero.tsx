import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid",
          my: "150px",
          gap: { xs: "60px", lg: "0px" },
        }}
      >
        <Box>
          <Typography variant="h3">Hi, i am Saajan,</Typography>
          <Typography variant="h4">
            {" "}
            Bristol Univeristy MEng graduate
          </Typography>
        </Box>

        <Image
          alt={"photo of myself during my graduation"}
          width={400}
          height={400}
          src={"/imgs/heroPhoto.jpg"}
          style={{ borderRadius: "50%", border: "5px solid rgb(255, 0, 0)" }}
        />
      </Box>
    </Container>
  );
};

export default HomeHero;
