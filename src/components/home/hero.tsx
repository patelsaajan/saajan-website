"use client";

import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const HomeHero = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          justifyContent: "space-around",
          alignItems: "center",
          // border: "1px solid",
          textAlign: { xs: "center", lg: "left" },
          mt: "50px",
          gap: { xs: "60px", lg: "0px" },
        }}
      >
        <Box>
          <Typography variant="h3" mt="20px">
            Hi, I am Saajan,
          </Typography>
          <Typography variant="h4">Bristol Univeristy MEng graduate</Typography>
          <Box sx={{ display: "flex column" }}>
            <Typography variant="body1" py={"5px"} textAlign={"justify"}>
              I'm originally from Cardiff and studied Electro-Mechanical
              Engineering at the University of Bristol. I take pride in holding
              a first-class master's degree in this field, with my guiding
              principles in life focusing on making the world a better place and
              assisting as many people as I can along the way.
            </Typography>
            <Typography variant="body1" py={"5px"} textAlign={"justify"}>
              Currently, I'm on a learning journey, delving into TypeScript and
              React, all the while sharpening my Python skills. When I'm not
              deeply engrossed in coding, you can find me passionately
              supporting Liverpool. I've discovered a unique way to blend my
              enthusiasm for football with my keen interest in data by venturing
              into the realms of data engineering and visualization.
            </Typography>
            <Typography variant="body1" py={"5px"} textAlign={"justify"}>
              Away from the tech world, I'm a passionate cook who thrives on
              experimenting with recipes and discovering delightful flavor
              combinations.
            </Typography>
          </Box>

          <Button
            href="https://1drv.ms/b/s!AtfvxxhKVXNCoii9x-V9mncj65jH?e=Qgbexq"
            sx={{
              backgroundColor: "primary.main",
              color: "#FFFF",
              width: "120px",
              height: "50",
              mt: "50px",
              fontWeight: "525",
              borderRadius: "20px",
              transition: "all 200ms ease-out",
              "&:hover": {
                backgroundColor: "primary.main",
                transform: "scale(1.1)",
                borderRadius: "15px",
                fontWeight: "600",
              },
            }}
          >
            View CV
          </Button>

          <Typography mt={"20px"}>CV is currently outdated :/</Typography>
        </Box>

        <Image
          alt={"photo of myself during my graduation"}
          width={400}
          height={400}
          src={"/imgs/heroPhoto.jpg"}
          style={{
            borderRadius: "50%",
            border: `5px solid ${theme.palette.primary.main}`,
          }}
        />
      </Box>
    </Container>
  );
};

export default HomeHero;
