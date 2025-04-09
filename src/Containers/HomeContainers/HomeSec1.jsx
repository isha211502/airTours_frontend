import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import img1 from "../../assets/Svg/Sec1Plane2.svg";
import img2 from "../../assets/Svg/Visa.svg";
import img3 from "../../assets/Svg/Holiday.svg";
import Parachute from "../../assets/Svg/Plane1.svg";
import { color } from "../../constant";
const services = [
  {
    title: "International & Domestic Flights",
    description: "Get the best deals on Air India and other top airlines.",
    img: img1,
  },
  {
    title: "Hassle-Free Passport & Visa Services",
    description: "We handle the paperwork, so you don’t have to.",
    img: img2,
  },
  {
    title: "Exotic Cruise Vacations",
    description: "Set sail on a luxurious journey..",
    img: img3,
  },
];

const HomeSec1 = () => {
  return (
    <Box sx={{ color: color.white, py: 5 }}>
      <Container>
        {/* Header  */}
        <Grid container spacing={3} alignItems="center">
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { md: "space-between" },
            }}
          >
            <Typography
              fontWeight="700"
              fontFamily="RalewayRegular"
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  lg: "2.3rem",
                  textAlign: { xs: "center", md: "left" },
                },
              }}
            >
              Discover the World with <br /> Air Tours Inc
            </Typography>
            <Grid sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <img src={Parachute} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <div className="Sec1background">
          {/* Description */}
          <Box
            sx={{
              border: "2px solid #4E64EE",
              p: 3,
              borderRadius: 2,
              my: 5,
              px: { xs: "1rem", sm: "2rem", md: "4rem", lg: "5rem" },
            }}
          >
            <Typography
              textAlign="left"
              fontFamily="JostRegular"
              fontSize="1.3rem"
              lineHeight="1.5rem"
            >
              Imagine a world where your travel needs are handled with
              professionalism, precision, and personalized service. That’s
              exactly what Air Tours Inc. delivers.
            </Typography>
          </Box>

          {/* Service*/}
          <Grid container spacing={3} justifyContent="center" my={5}>
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    backgroundColor: "#111",
                    color: color.white,
                    p: 2,
                    textAlign: "center",
                    width: "250px",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "88%",
                      transform: "translateX(-50%)",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#4169E1",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={service.img}
                      style={{ height: "2rem", width: "2rem" }}
                      alt=""
                    />{" "}
                  </Box>

                  <CardContent sx={{ mt: 3 }}>
                    <Typography
                      fontFamily="JostRegular"
                      fontSize="1.5rem"
                      fontWeight="500"
                      textAlign="left"
                      lineHeight="1.5rem"
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      fontSize="1.2rem"
                      lineHeight="1.2rem"
                      textAlign="left"
                      fontFamily="JostRegular"
                      mt={7}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Travel Planning Section */}
          <Box sx={{ p: 3, borderRadius: 2, mt: 5 }}>
            <Typography
              fontWeight="700"
              fontFamily="RalewayRegular"
              sx={{ fontSize: { xs: "1.7rem", lg: "2.3rem" } }}
            >
              Custom Travel Planning
            </Typography>

            <Typography
              sx={{
                border: "2px solid #4E64EE",
                p: 3,
                px: { xs: "1rme", lg: "5rem" },
                my: 3,
                borderRadius: 2,
              }}
              textAlign="left"
              fontFamily="JostRegular"
              fontSize="1.3rem"
              lineHeight="1.5rem"
            >
              We understand that every traveler has unique preferences. Whether
              you’re seeking a luxury vacation or a customized tour package, our
              experts curate the perfect itinerary just for you.
            </Typography>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default HomeSec1;
