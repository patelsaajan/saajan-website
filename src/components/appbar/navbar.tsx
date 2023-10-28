import * as React from "react";
import AppBar from "@mui/material/AppBar";
import FullNavbar from "./fullNavbar";
import { useMediaQuery, useTheme } from "@mui/material";
import CompactBar from "./compactBar";

const pagesArray = [
  { name: "home", goTo: "/" },
  { name: "projects", goTo: "/projects" },
  { name: "blog", goTo: "/blog" },
  { name: "diary", goTo: "/diary" },
  { name: "recipes", goTo: "/recipes" },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "0", mt: "20px" }}
    >
      {isMobile ? (
        <CompactBar pages={pagesArray} />
      ) : (
        <FullNavbar pages={pagesArray} />
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
