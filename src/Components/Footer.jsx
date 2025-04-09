import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import Linkdin from "../assets/Svg/Linkdin.svg";
import Facebook from "../assets/Svg/Facebook.svg";
import Instagram from "../assets/Svg/Instaram.svg";
import logo from "../assets/Images/ATILogo.jpg";
const Footer = () => {
  return (
    // <Container>
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        px: { xs: "1rem", lg: "8rem" },
        mt: "3rem",
        py: "1rem",
      }}
    >
      {/* Left Section */}
      <Grid item xs={12} sm={4} md={4}>
        <Typography
          fontFamily="RalewayRegular"
          fontSize="1rem"
          color="#4E64EE"
          fontWeight="700"
        >
          <img src={logo} alt="" style={{ height: "30%", width: "30%" }} />
        </Typography>
        <Box mt={2}>
          <Link href="#" sx={{ mx: 1 }}>
            <img
              src={Facebook}
              alt=""
              style={{ height: "2rem", width: "2rem" }}
            />
          </Link>
          <Link href="#" sx={{ mx: 2 }}>
            <img
              src={Instagram}
              alt=""
              style={{ height: "2rem", width: "2rem" }}
            />
          </Link>
          <Link href="#" sx={{ mx: 2 }}>
            <img
              src={Linkdin}
              alt=""
              style={{ height: "2rem", width: "2rem" }}
            />
          </Link>
        </Box>
      </Grid>

      {/* Center Section */}
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{ marginY: { xs: "1rem", md: "0rem" } }}
      >
        <Typography
          fontFamily="RalewayRegular"
          fontSize="1.5rem"
          color="#4E64EE"
          fontWeight="700"
        >
          Quick Links
        </Typography>
        {["Home", "About", "Service", "Contact"].map((text) => (
          <Typography key={text}>
            <Link
              href="#"
              fontFamily="RalewayRegular"
              fontSize="1.2rem"
              color="#4E64EE"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                display: "block",
                lineHeight: "2.5rem",
              }}
            >
              {text}
            </Link>
          </Typography>
        ))}
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{ paddingBottom: { xs: "1.5rem", md: "0rem" } }}
      >
        <Typography
          fontFamily="RalewayRegular"
          fontSize="1.5rem"
          color="#4E64EE"
          fontWeight="700"
        >
          Subscribe
        </Typography>
        <Typography
          fontFamily="RalewayRegular"
          fontSize="1.2rem"
          color="#4E64EE"
          fontWeight="500"
          sx={{ my: 3 }}
        >
          Sign up for our monthly blogletter to
          <br /> stay informed about travel and tours
        </Typography>
        <Box display="flex" justifyContent="start" textAlign="left">
          <TextField
            InputLabelProps={{ style: { color: "white" } }}
            size="small"
            label="Email"
            variant="outlined"
            sx={{ mr: 1, backgroundColor: "#414143", color: "white" }}
          />
        </Box>
        <Button
          sx={{ marginTop: 1, backgroundColor: "#4E64EE", color: "white" }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
    // </Container>
  );
};

export default Footer;
