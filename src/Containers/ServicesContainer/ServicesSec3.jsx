import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { color } from "../../constant";

const contentData = [
  {
    id: 1,
    title: "International & Domestic Flight Bookings",
    content:
      "Book your international and domestic flights with ease. We offer competitive rates and hassle-free bookings.",
  },
  {
    id: 2,
    title:
      "Express Services Available – We Upload Your Passport for Urgent Travel Needs",
    content:
      "Need urgent passport upload? Our express services ensure fast processing for your travel needs.",
  },
  {
    id: 3,
    title: "US Passport Service Updation – No OCI Re-Issue Required",
    content:
      "Update your US passport effortlessly without the need for an OCI re-issue.",
  },
  {
    id: 4,
    title: "OCI Service (Regular, Minor & Reissue)",
    content:
      "Get assistance with regular, minor, and reissue OCI services smoothly.",
  },
  {
    id: 5,
    title: "Renunciation of Indian Citizenship",
    content:
      "We provide services to renounce Indian citizenship following legal procedures.",
  },
  {
    id: 6,
    title: "Indian Passport Renewal & Tatkal Services",
    content:
      "Renew your Indian passport quickly with our regular and Tatkal services.",
  },
  {
    id: 7,
    title: "E-Visa for India",
    content: "Apply for an E-Visa to India hassle-free through our service.",
  },
  {
    id: 8,
    title: "Cruise Services",
    content: "Explore our cruise packages for an unforgettable experience.",
  },
  {
    id: 9,
    title: "Global Entry Service",
    content:
      "Speed up your entry process with our Global Entry Service assistance.",
  },
];

function ServicesSec3() {
  const [activeId, setActiveId] = useState(contentData[0].id);
  return (
    <Grid>
      <Container>
        <Typography
          sx={{
            fontFamily: "RalewayRegular",
            fontSize: "3rem",
            fontWeight: 800,
          }}
        >
          Our Flight Services
        </Typography>
        <Grid container sx={{ display: "flex", marginY: "5%" }}>
          <Grid
            item
            sx={{
              width: "40%",
              backgroundColor: "#007BFF",
              color: "white",
              padding: "20px",
            }}
          >
            {contentData.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor:
                    activeId === item.id ? "#0056b3" : "transparent",
                  transition: "0.3s",
                }}
                onClick={() => setActiveId(item.id)}
              >
                {item.id}. {item.title}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            sx={{
              padding: "20px",
              width: "60%",
              backgroundColor: color.dark,
              color: color.white,
            }}
          >
            {activeId !== null && (
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {contentData.find((item) => item.id === activeId).content}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ServicesSec3;
