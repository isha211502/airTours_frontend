import { Grid, Typography } from "@mui/material";
import React from "react";

const HomeText = () => {
  return (
    <Grid
      sx={{
        color: "white",
        height: { xs: "32vh", md: "100vh", lg: "100Vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid sx={{ width: "70%" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "4rem", lg: "6rem" },
            fontFamily: "RalewayBold",
            lineHeight: { xs: "1.2rem", md: "4rem", lg: "7rem" },
          }}
        >
          Welcome to Air Tours Inc
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "2.7rem", lg: "3rem" },
            lineHeight: {},
          }}
        >
          Your One <br />{" "}
          <span style={{ border: "1px solid yellow", padding: "5px" }}>
            Stop
          </span>{" "}
          Travel Partner{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.5rem", md: "1rem", lg: "1.2rem" },
            marginTop: { xs: "0.5rem", lg: "2rem" },
            lineHeight: { xs: "0.8rem", md: "1.2rem", lg: "1.5rem" },
          }}
        >
          For over 30 years, Air Tours Inc. has been a trusted name in the
          travel industry offering a seamless travel experience to NRIs and
          global ravelers. Whether you're booking international flights,
          renewing your passport, applying for an OCI card, or planning an
          unforgettable cruise, we are here to make your journey smooth and
          hassle-free. As Air India’s preferred partner and one of the largest
          travel consolidators in the USA, we bring you the best deals, premium
          v xservices, and expert assistance to make every trip amemorable one.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeText;
