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
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import { path } from "../constant";
import logo from "../assets/Images/ATILogo.jpg";
const pages = ["Home", "About", "Service", "Contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const transparentRoutes = [path.home, path.service];
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
        backgroundColor: transparentRoutes.includes(location.pathname)
          ? "transparent"
          : "#2E2D2D",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "space-between" },
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo */}
          {/* <Typography
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
          > */}
          <Grid
            onClick={() => navigate(path.home)}
            sx={{
              height: { xs: 40, md: 80 },
              width: { xs: 40, md: 80 },
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="" style={{ height: "100%", width: "100%" }} />
          </Grid>
          {/* </Typography> */}
          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              justifyContent: { md: "end", lg: "end" },
              flexGrow: 1,
            }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === path[page.toLowerCase()];

              return (
                <Link
                  key={page}
                  to={path[page.toLowerCase()]}
                  style={{
                    fontFamily: "JostRegular",
                    // fontSize: "1.2rem",
                    textDecoration: "none",
                    color: isActive ? "#4E64EE" : "white", // Active link color blue
                    fontWeight: isActive ? "bold" : "600",
                    fontSize: "1rem",
                    transition: "0.3s",
                  }}
                >
                  {page}
                </Link>
              );
            })}
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
