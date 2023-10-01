import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type cardPrompts = {
  primaryDish: string;
  secondaryDish: string;
  foodIamge: string;
  desc: string;
};

const BriefCard = ({
  primaryDish,
  secondaryDish,
  foodIamge,
  desc,
}: cardPrompts) => {
  return (
    <Box
      sx={{
        display: "flex column",
        border: "2px solid black",
        boxShadow: 1,
        width: "280px",
        justifyContent: "center",
        p: "10px",
        m: "20px",
        borderRadius: "16px",
      }}
    >
      <Image
        src={foodIamge}
        width={200}
        height={200}
        alt="test image of food"
        style={{ border: "1px solid black", borderRadius: "16px" }}
      />
      <Typography variant="h5" fontWeight={700}>
        {primaryDish}
      </Typography>
      <Typography variant="body1" fontWeight={600}>
        {secondaryDish}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "justify", mt: "10px" }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default BriefCard;
