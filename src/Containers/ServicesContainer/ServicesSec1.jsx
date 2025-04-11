import { Grid, Typography } from "@mui/material";
import React from "react";

const ServicesSec1 = () => {
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
            fontSize: { xs: "1rem", sm: "2rem", md: "4rem", lg: "4rem" },
            fontFamily: "RalewayBold",
            lineHeight: { xs: "1rem", sm: "2.2rem", md: "4rem", lg: "5rem" },
            marginTop: { xs: "2rem", sm: "0" },
            marginLeft: { xs: "0.5rem" },
          }}
        >
          Expert Travel & Documentation Services Under One Roof
        </Typography>

        <Typography
          sx={{
            fontFamily: "JostRegular",

            fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem", lg: "1.5rem" },
            marginTop: { xs: "0.5rem", lg: "2rem" },
            lineHeight: {
              xs: "0.8rem",
              sm: "0.9rem",
              md: "1.2rem",
              lg: "2rem",
            },
            marginLeft: { xs: "0.5rem" },
          }}
        >
          At Air Tours Inc., we offer a complete range of travel and consular
          services tailored for NRIs and global travelers from flight bookings
          and cruise packages to Indian passport renewals, OCI assistance,
          renunciation, and e-visas. Trust us for reliable, timely, and
          professional service every step of your journey.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServicesSec1;
