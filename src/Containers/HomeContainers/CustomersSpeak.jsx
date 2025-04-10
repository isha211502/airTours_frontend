import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { color } from "../../constant";
import OCSPlane from "../../assets/Svg/OCSPlane.svg";
const testimonials = [
  {
    name: "Rajesh P.",
    feedback:
      "Air Tours Inc. made my trip to India seamless and stress-free. Their team handled my OCI and flight booking effortlessly. Highly recommend!",
  },
  {
    name: "Nina D.",
    feedback:
      "I booked my first-ever cruise vacation through Air Tours, and it was an experience of a lifetime. Their customer service is outstanding.",
  },
  {
    name: "Rajesh P.",
    feedback:
      "Air Tours Inc. made my trip to India seamless and stress-free. Their team handled my OCI and flight booking effortlessly. Highly recommend!",
  },
];

const CustomersSpeak = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", pt: 1 }}>
      <Container>
        <Typography
          fontFamily="RalewayBold"
          fontSize="3rem"
          textAlign="left"
          sx={{ color: color.blue }}
          mb={2}
        >
          Our Customers Speak for Us
        </Typography>
        <Typography
          fontSize="1rem"
          fontFamily="RalewayBold"
          textAlign="left"
          letterSpacing="0.1rem"
          sx={{ color: color.blue, fontWeight: 500 }}
          mb={4}
        >
          Customer Testimonials
        </Typography>

        <Grid
          container
          spacing={3}
          display="flex"
          justifyContent="center"
          sx={{ position: "relative", zIndex: 1 }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ width: "350px" }}
            >
              <Card
                sx={{
                  height: "250px",
                  backgroundColor: "#414143",
                  color: "#fff",
                  p: 1,
                  borderBottom: "0.8rem solid #4E64EE",
                  borderRight: "0.8rem solid #4E64EE",
                  boxShadow: "none",
                  borderRadius: "0px",
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      sx={{ bgcolor: "#White", width: 70, height: 70, mr: 2 }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "JostRegular",
                        fontWeight: "600",
                        fontSize: "1.2rem",
                        lineHeight: "1.2rem",
                        marginTop: "2rem",
                        letterSpacing: "0.1rem",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      marginTop: "3rem",
                      fontSize: "1rem",
                      letterSpacing: "0.1rem",
                      fontFamily: "JostRegular",
                    }}
                  >
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ display: { xs: "none", lg: "block" } }}>
          <img
            src={OCSPlane}
            alt=""
            style={{
              marginTop: "-500px",
              zIndex: "-1",
              position: "absolute",
              marginLeft: "30px",
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomersSpeak;
