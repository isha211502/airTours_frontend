import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { color } from "../../constant";
import img1 from "../../assets/Svg/WATIimg1.svg";
import img2 from "../../assets/Svg/WATIimg5.svg";
import img3 from "../../assets/Svg/WATIimg4.svg";
import img4 from "../../assets/Svg/WATIimg3.svg";

const ServicesSec2 = () => {
  const item = [
    {
      img: img1,
      title: "Best Price Guarantee",
      para: "We offer exclusive deals on international and domestic flights.",
    },
    {
      img: img2,
      title: "Personalized Itineraries",
      para: "Flexible and customized travel options to match your schedule.",
    },
    {
      img: img3,
      title: "24/7 Support",
      para: "We’re here for changes, cancellations, or rescheduling.",
    },
    {
      img: img4,
      title: "Special NRI Offers",
      para: "Exclusive fares for travelers visiting India or flying internationally",
    },
  ];
  return (
    <Grid sx={{ marginY: "2rem" }}>
      <Container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: "800",
              fontFamily: "RalewayRegular",
              color: color.blue,
            }}
          >
            Why Air Tours Inc.?
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "JostRegular",
            }}
          >
            Try variety of benefits when using our services
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            marginY: "5%",
            gap: 5,
          }}
        >
          {item.map((item, index) => (
            // <Grid key={index}>
            //   <img
            //     src={item.img}
            //     alt="photo"
            //     style={{ height: "40px", width: "40px" }}
            //   />
            //   <Typography
            //     sx={{
            //       fontFamily: "JostRegular",
            //       fontWeight: 600,
            //       fontSize: "1rem",
            //     }}
            //   >
            //     {item.title}
            //   </Typography>
            //   <Typography
            //     sx={{
            //       fontFamily: "JostRegular",
            //       fontWeight: 400,
            //       fontSize: "1rem",
            //     }}
            //   >
            //     {item.para}
            //   </Typography>
            // </Grid>
            <Grid
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={item.img}
                alt="photo"
                style={{ height: "40px", width: "40px" }}
              />
              <Typography
                sx={{
                  fontFamily: "JostRegular",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "JostRegular",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                {item.para}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default ServicesSec2;
