import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";

const pages = [
  { name: "home", goTo: "/" },
  { name: "projects", goTo: "/projects" },
  { name: "blog", goTo: "/blog" },
  { name: "diary", goTo: "/diary" },
  { name: "cookbook", goTo: "/cookbook" },
];

function ResponsiveAppBar() {
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
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "0", mt: "20px" }}
    >
      <Container maxWidth="lg" sx={{}}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              gap: "30px",

              width: "100%",
              justifyContent: "center",
            }}
          >
            {pages.map((page, i) => (
              <Button
                disableRipple
                key={i}
                sx={{
                  color: "black",
                  fontSize: "Large",
                  p: "20px",
                  fontWeight: "550",

                  transition: "auto 200ms ease-in",
                  "&:hover": {
                    textDecoration: "1.5px underline wavy black",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Link href={page.goTo}>{page.name} </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
