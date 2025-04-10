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
import { useServiceData } from "../../utils/ApiHelper";


const Services = () => {
  const { data, isLoading, error } = useServiceData();

  const res = data?.result?.filter((item) => item.homePage === true);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data!</Typography>;
  }
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: "2rem", lg: "2rem" } }}>
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
            fontSize: "1.5rem",
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
          {res?.map((service, index) => (
            <Grid key={index}>
              <Card
                sx={{
                  backgroundColor: "#414143",
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
                    sx={{
                      display: "flex",
                      fontSize: "1rem",
                      marginTop: "0.8rem",
                      fontFamily: "RalewayRegular",
                      letterSpacing: "0.1rem",
                    }}
                  >
                    {service.homeTitle}
                  </Typography>
                  <ul>
                    {service?.bulletpoints?.map((detail, i) => (
                      <li key={i}>
                        <Typography
                          sx={{
                            fontFamily: "JostRegular",
                            letterSpacing: "0.1rem",
                            fontSize: "1rem",
                          }}
                        >
                          {detail}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
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
                    style={{
                      height: "80px",
                      width: "150px",
                      marginTop: "0.8rem",
                    }}
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
