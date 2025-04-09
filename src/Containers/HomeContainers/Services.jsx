import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";

import flight from "../../assets/Svg/flight.svg";
import { color } from "../../constant";
const services = [
  {
    title: "Flight Ticket Booking",
    details: [
      "Domestic and international flights at unbeatable prices.",
      "Special deals for NRIs traveling to India.",
      "Group bookings, last-minute travel, and exclusive airline partnerships.",
    ],
  },
  {
    title: "Indian Passport & OCI Services",
    details: [
      "Hassle-free Indian passport renewals, name changes, and corrections.",
      "OCI card applications, renewals, and assistance for new applicants.",
      "Step-by-step guidance to ensure smooth processing.",
    ],
  },
  {
    title: "Flight Ticket Booking",
    details: [
      "Domestic and international flights at unbeatable prices.",
      "Special deals for NRIs traveling to India.",
      "Group bookings, last-minute travel, and exclusive airline partnerships.",
    ],
  },
  {
    title: "Indian Passport & OCI Services",
    details: [
      "Hassle-free Indian passport renewals, name changes, and corrections.",
      "OCI card applications, renewals, and assistance for new applicants.",
      "Step-by-step guidance to ensure smooth processing.",
    ],
  },
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: "2rem", lg: "8rem" } }}>
      <Container>
        <Typography
          textAlign="left"
          fontFamily="RalewayBold"
          fontSize="3rem"
          mb={2}
          sx={{ color: color.blue }}
        >
          Explore Our Services
        </Typography>
        <Typography
          textAlign="center"
          mb={4}
          sx={{
            fontSize: "1rem",
            color: color.blue,
            fontWeight: 500,
            fontFamily: "JostRegular",
            lineHeight: "1.5rem",
            letterSpacing: "0.1rem",
          }}
        >
          Each journey is unique, and so are your travel needs. Whether you need
          a quick flight booking or a fully planned vacation, we have the
          perfect solution for you.
        </Typography>

        <Grid container spacing={3} display="flex" justifyContent="center">
          {services.map((service, index) => (
            <Grid key={index}>
              <Card
                sx={{
                  backgroundColor: "#333",
                  color: "#fff",
                  p: 2,
                  display: "flex",
                  alignItems: "top",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <CardContent
                  sx={{
                    display: { lg: "flex" },
                    width: { lg: "850px" },
                    alignItems: "top",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Typography
                    width="200px"
                    fontWeight="bold"
                    sx={{ display: "flex", justifyContent: "top" }}
                  >
                    {service.title}
                  </Typography>
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i}>
                        <Typography variant="body2">{detail}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* <Button
                    variant="contained"
                    sx={{
                      backgroundColor: color.blue,
                      color: color.white,
                      mb: 1,
                    }}
                  >
                    Learn More
                  </Button> */}
                  <img
                    src={flight}
                    style={{ height: "60px", width: "100px" }}
                    alt=""
                  />
                  {/* <FlightTakeoffIcon sx={{ fontSize: 50, color: "#3A3ACC" }} /> */}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
