import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, IconButton } from "@mui/material";

type prompts = {
  pages: typeArray[];
};

type typeArray = {
  goTo: string;
  name: string;
};

const CompactBar = ({ pages }: prompts) => {
  return (
    <Container maxWidth="lg">
      <IconButton>
        <MenuIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
    </Container>
  );
};

export default CompactBar;
