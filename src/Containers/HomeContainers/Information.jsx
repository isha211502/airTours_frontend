import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { color } from "../../constant";
const Information = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            sx={{
              color: color.blue,
              fontFamily: "RalewayBold",
              fontSize: { xs: "1.7rem", sm: "3rem" },
              lineHeight: { xs: "1.9rem", sm: "3rem" },
            }}
          >
            Experience Unmatched Convenience
          </Typography>
          <Typography
            mt={1}
            sx={{
              fontSize: "1rem",
              fontFamily: "JostRegular",
              letterSpacing: "0.1rem",
              fontWeight: 600,
            }}
          >
            At Air Tours Inc., we take pride in making travel as effortless as
            possible. We go beyond just booking your flights—we assist with all
            the essential travel formalities that often cause unnecessary
            stress. Our streamlined process ensures that everything, from
            document verification to ticket confirmations, is handled
            professionally and efficiently.
          </Typography>
        </Grid>
        <Grid sx={{ display: { md: "flex" }, gap: 5 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                color: color.blue,
                fontFamily: "RalewayBold",
                fontSize: { xs: "1.7rem", sm: "3rem" },
                lineHeight: { xs: "1.9rem", sm: "3rem" },
              }}
            >
              Hassle-Free Booking & Documentation
            </Typography>
            <Typography
              mt={1}
              sx={{
                fontSize: "1rem",
                fontFamily: "JostRegular",
                letterSpacing: "0.1rem",
                fontWeight: 600,
              }}
            >
              We understand the complexities of travel documentation. Whether
              it's applying for an OCI card, renewing your passport, or
              obtaining an E-Visa, our team ensures a smooth, error-free
              application process.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                color: color.blue,
                fontFamily: "RalewayBold",
                fontSize: { xs: "1.7rem", sm: "3rem" },
                lineHeight: { xs: "1.9rem", sm: "3rem" },
                marginTop: { xs: "2rem", sm: "0" },
              }}
            >
              Exclusive Travel Perks
            </Typography>
            <Typography
              mt={1}
              sx={{
                fontSize: "1rem",
                fontFamily: "JostRegular",
                letterSpacing: "0.1rem",
                fontWeight: 600,
              }}
            >
              Our clients enjoy priority access to special deals, personalized
              customer support, and exclusive travel upgrades, making their
              journey even more enjoyable.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Information;
