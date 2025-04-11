import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import img1 from "../../assets/Svg/WCUImg1.svg";
import img2 from "../../assets/Svg/WCUImg5.svg";
import img3 from "../../assets/Svg/WCUImg2.svg";
import img4 from "../../assets/Svg/WCUImg3.svg";
import plane from "../../assets/Svg/Plane4.svg";
import WCUBackground2 from "../../assets/Svg/WCUBackground2.svg";
import LinePlane from "../../assets/Svg/pline.svg";
import { color } from "../../constant";
const services = [
  {
    title: "Reliable & Trusted Since 1993",
    description:
      "Air Tours Inc. is a name synonymous with reliability. Our extensive experience, partnerships with major airlines, and commitment to customer satisfaction make us the first choice for thousands of travelers.",
    img: img1,
  },
  {
    title: "Comprehensive Travel Solutions",
    description:
      "From flights and visas to complete vacation packages, we handle every aspect of your journey. You no longer need to juggle multiple agencies—we are your single point of contact for all travel needs.",
    img: img2,
  },
  {
    title: "Best Travel Deals",
    description:
      "We bring you exclusive airfare discounts, last-minute travel offers, and seasonal vacation packages so you can explore the world without breaking the bank.",
    img: img3,
  },
  {
    title: "Exceptional Customer Service",
    description:
      "Our travel consultants are dedicated to assisting you at every step, ensuring a seamless experience from booking to boarding.",
    img: img4,
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: "2rem" }}>
      <Container>
        {/* Header  */}
        <Typography
          sx={{
            color: { xs: color.white, md: color.blue },
            display: "flex",
            justifyContent: { xs: "center", md: "left" },
            ml: { xs: 4, md: 0 },
          }}
          fontFamily="RalewayBold"
          fontSize="3rem"
          boxShadow="none"
          lineHeight="3rem"
        >
          Why Choose Us?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            // display: { xs: "none", md: "block" },
          }}
        >
          <img src={plane} alt="" style={{ hight: "10%", width: "10%" }} />
        </Box>{" "}
        {/* Service*/}
        <Grid
          container
          // gap={"1rem"}
          justifyContent="center"
          marginTop="2rem"
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={index}
              sx={{
                hight: "auto",
                width: { xs: "100%", sm: "45%", md: "40%", lg: "22%" },
                margin: 1,
              }}
            >
              <Card
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#222",
                  color: "white",
                  padding: "0.2rem",
                  pt: 4,
                  textAlign: "left",
                  borderRadius: 2,
                  position: "relative",
                  overflow: "hidden",
                  letterSpacing: "0.1rem",
                }}
              >
                {/* Blue Half-Circle */}
                <Box
                  sx={{
                    backgroundColor: "#4E64EE",
                    borderRadius: "50%",
                    height: "8rem",
                    width: "8rem",
                    position: "absolute",
                    top: "-3.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      marginTop: "3rem",
                      height: "3.2rem",
                      width: "3.8rem",
                    }}
                    src={service.img}
                    alt=""
                  />
                </Box>
                <CardContent sx={{ marginTop: "2rem", height: "320px" }}>
                  <Typography
                    sx={{
                      letterSpacing: "0.1rem",
                      fontFamily: "JostRegular",
                      marginTop: "0.8rem",
                    }}
                    fontWeight="bold"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    mt={8}
                    sx={{
                      letterSpacing: "0.1rem",
                      fontSize: "1rem",
                      fontFamily: "JostRegular",
                      lineHeight: "1.1rem",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: 0, md: "-10%", lg: "-7%" },
              zIndex: "1",
              position: "relative",
              width: { xs: 0, md: "90%", lg: "100%" },
            }}
          >
            <img src={WCUBackground2} alt="" width={"100%"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
