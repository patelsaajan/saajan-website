"use client";

import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HomeHero = () => {
  const firstDuration = 10;
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
          mt: "30px",
          gap: { xs: "30px", lg: "0px" },
        }}
      >
        <Box>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{
              stiffness: 40,
              type: "spring",
              duration: firstDuration,
            }}
          >
            <Typography variant="h3" mt="10px">
              Hi, I am Saajan,
            </Typography>
            <Typography variant="h4">
              Bristol Univeristy MEng Graduate
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              duration: 2.5,
              delay: 0.5,
            }}
          >
            <Box sx={{ display: "flex column" }}>
              <Typography variant="body1" py={"5px"} textAlign={"justify"}>
                I'm originally from Cardiff and studied Electro-Mechanical
                Engineering at the University of Bristol. I take pride in
                holding a first-class master's degree in this field, with my
                guiding principles in life focusing on making the world a better
                place and assisting as many people as I can along the way.
              </Typography>
              <Typography variant="body1" py={"5px"} textAlign={"justify"}>
                Currently, I'm on a learning journey, delving into TypeScript
                and React, all the while sharpening my Python skills. When I'm
                not deeply engrossed in coding, you can find me passionately
                supporting Liverpool. I've discovered a unique way to blend my
                enthusiasm for football with my keen interest in data by
                venturing into the realms of data engineering and visualization.
              </Typography>
              <Typography variant="body1" py={"5px"} textAlign={"justify"}>
                Away from the tech world, I'm a passionate cook who thrives on
                experimenting with recipes and discovering delightful flavor
                combinations.
              </Typography>
            </Box>
          </motion.div>

          <Button
            href="https://1drv.ms/b/s!AtfvxxhKVXNCoja_Kq5SYF-rB3td?e=lJCPzl"
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
        </Box>

        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{
            stiffness: 50,
            type: "spring",
            duration: firstDuration,
          }}
        >
          <Image
            alt={"photo of myself"}
            width={400}
            height={400}
            src={"/imgs/heroPhoto.jpeg"}
            style={{
              borderRadius: "50%",
              border: `5px solid ${theme.palette.primary.main}`,
            }}
          />
        </motion.div>
      </Box>
    </Container>
  );
};

export default HomeHero;
