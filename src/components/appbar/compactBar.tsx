import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";

type prompts = {
  pages: typeArray[];
};

type typeArray = {
  goTo: string;
  name: string;
};

const CompactBar = ({ pages }: prompts) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="lg">
      <IconButton onClick={handleOpenNavMenu}>
        <MenuIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.goTo} onClick={handleCloseNavMenu}>
            <Link href={page.goTo}>
              <Typography textAlign="center">{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default CompactBar;
