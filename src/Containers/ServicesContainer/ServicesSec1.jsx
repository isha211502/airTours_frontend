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
            fontSize: { xs: "1rem", md: "4rem", lg: "4rem" },
            fontFamily: "RalewayBold",
            lineHeight: { xs: "1rem", md: "4rem", lg: "5rem" },
          }}
        >
          International & Domestic Flight Bookings 
        </Typography>

        <Typography
          sx={{
            fontFamily: "JostRegular",

            fontSize: { xs: "0.5rem", md: "1rem", lg: "1.5rem" },
            marginTop: { xs: "0.5rem", lg: "2rem" },
            lineHeight: { xs: "0.8rem", md: "1.2rem", lg: "2rem" },
          }}
        >
          Whether you're planning a trip back to India, a vacation abroad, or a
          domestic journey within the U.S., Air Tours Inc. ensures a seamless
          travel experience with the best flight deals and hassle-free booking
          process. Our experts work closely with airline partners to provide
          competitive fares and customized itineraries that suit your travel
          needs.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServicesSec1;
