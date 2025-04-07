import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { path } from "../constant";

const pages = ["Home", "Destination", "Gallery", "Blog", "About", "Contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        paddingY: 1,
        boxShadow: "none",
        backgroundColor:
          location.pathname === path.home ? "transparent" : "#2E2D2D",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "center" },
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Typography
            component="div"
            sx={{
              color: "White",
              fontWeight: "600",
              fontSize: "1.5rem",
              letterSpacing: ".2rem",
              textTransform: "uppercase",
              fontFamily: "Raleway, sans-serif",
              paddingX: { md: "3rem", lg: "5rem" },
            }}
          >
            LOGO
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              justifyContent: { md: "center", lg: "center" },
              flexGrow: 1,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={path[page.toLowerCase()]}
                style={{
                  textDecoration: "none",
                  color: "White",
                  fontWeight: "600",
                  fontSize: "1rem",
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={path[page.toLowerCase()]}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
