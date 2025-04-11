import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import logo from "../assets/Images/ATILogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../constant";
import FacebookIcon from "../assets/Svg/Instaram.svg";
import InstagramIcon from "../assets/Svg/Facebook.svg";
import LinkedInIcon from "../assets/Svg/Linkdin.svg";
const pages = ["Home", "About", "Service", "Contact"];
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 3, lg: 6 } }}>
      <Grid
        container
        sx={{
          px: { xs: 2, md: 5, lg: 0 },
          justifyContent: {
            xs: "normal",
            md: "space-between",
            lg: "space-evenly",
          },
        }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{ cursor: "pointer", mb: 2 }}
            onClick={() => {
              navigate(path.home);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo}
              alt="ATI Logo"
              style={{ height: "auto", width: "150px" }}
            />
          </Box>
          <Typography
            fontFamily="JostRegular"
            fontSize="1rem"
            color="#4E64EE"
            fontWeight="bold"
          >
            831 W Higgins Road, Schaumburg,
            <br /> IL 60195
          </Typography>
          <Typography
            fontFamily="JostRegular"
            fontSize="1rem"
            color="#4E64EE"
            fontWeight="bold"
            sx={{ mt: 1 }}
          >
            Copyright © {new Date().getFullYear()} Air Tours Inc.
            <br /> | All rights reserved
          </Typography>
        </Grid>

        {/* Center Section */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            mt: { xs: 4, md: 0 },
            width: { xs: "100%", md: "fit-content" },
          }}
        >
          <Typography
            fontFamily="RalewayRegular"
            fontSize="2rem"
            color="#4E64EE"
            fontWeight="700"
            gutterBottom
          >
            Quick Links
          </Typography>

          {pages.map((page) => {

            return (
              <Link
                key={page}
                to={path[page.toLowerCase()]}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  fontFamily: "RalewayRegular",
                  textDecoration: "none",
                  display: "block",
                  lineHeight: "3.5rem",
                  fontWeight: "bold",
                  color: "#4E64EE",
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Link>
            );
          })}
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4} sx={{ mt: { xs: 3, md: 0 } }}>
          <Typography
            fontFamily="RalewayRegular"
            fontSize="2rem"
            color="#4E64EE"
            fontWeight="700"
            gutterBottom
          >
            Follow Us On
          </Typography>
          <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
            <Link
              to="https://www.instagram.com/airtoursinc171/?fbclid=IwY2xjawJk1A5leHRuA2FlbQIxMAABHvPxd4i1xUduUTR4v9Ckv1CugxTsO6BmE74L-LJi0oSpWAHea_QqBAfm33X0_aem__zXTQDZy5hK8mxm_X5PajA#"
              target="_blank"
              sx={{ display: "inline-block" }}
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                style={{ height: "2.7rem", width: "2.5rem" }}
              />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61557567991931"
              target="_blank"
              sx={{ display: "inline-block" }}
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </Link>
            {/* <Link href="#" sx={{ display: "inline-block" }}>
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
