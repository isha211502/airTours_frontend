import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import img1 from "../../assets/Svg/Clock.svg";
import img2 from "../../assets/Svg/Customize.svg";
import img3 from "../../assets/Svg/Documnet.svg";
import { color } from "../../constant";
const features = [
  {
    img: img1,
    title: "24/7 Support",
    description: "Our travel consultants are always ready to assist you.",
  },
  {
    img: img2,
    title: "Customized Travel Solutions",
    description: "We tailor our services to meet your unique travel needs.",
  },
  {
    img: img3,
    title: "Hassle-Free Documentation",
    description: "We handle all the paperwork so you can travel worry-free.",
  },
];

const AbouSec7 = () => {
  return (
    <Box sx={{ px: { xs: 1, md: 5 }, py: 8 }}>
      <Container>
        <Typography
          sx={{
            fontFamily: "RalewayBold",
            fontSize: "3rem",
            lineHeight: "3rem",
            fontWeight: 700,
          }}
        >
          Our Commitment to Customer Satisfaction
        </Typography>
        <Typography
          sx={{
            fontFamily: "JostRegular",
            fontSize: "1.5rem",
            fontWeight: 500,
            marginTop: "1rem",
            // letterSpacing: "0.1rem",
          }}
        >
          At Air Tours Inc., our customers are our priority. We understand that
          travel planning can be overwhelming, which is why we take pride in
          offering personalized assistance at every stage of your journey.
          Whether you are traveling for leisure, business, or family reunions,
          we ensure a smooth and enjoyable experience.
        </Typography>

        <Grid container spacing={4} mt={2}>
          {features.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                marginTop: { xs: 5, md: 0 },
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "300px",
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: color.lightdark,
                  color: color.white,
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                }}
              >
                <Box>
                  <img src={item.img} alt="img" width="80" height="80" />
                </Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "JostRegular",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      textAlign: "left",
                      letterSpacing: "0.1rem",
                      marginTop: "2.5rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "JostRegular",
                      fontSize: "1.1rem",

                      letterSpacing: "0.1rem",
                      textAlign: "left",
                      lineHeight: "1.2rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AbouSec7;
