import {
  Container,
  Grid,
  IconButton,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";

import AddIcon from "@mui/icons-material/Add";
// import { useAboutData } from "../../utils/Apihelper";
export default function ServicesSec4() {
  //   const { data, isLoading, error } = useAboutData();
  //   const res = data?.result;

  //   const faqs = res?.aboutFaqs;
  const item = [
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },

    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global International Flight Bookings – Travel to India, Europe, Asia, and other global ",
    },
    {
      question: "Our Flight Services Include:",
      answer:
        "⃣International Flight Bookings – Travel to India, Europe, Asia, and other global",
    },
  ];
  return (
    <Grid
      className="fullcirclebg"
      sx={{
        display: "flex",
        justifyContent: "center",
        my: { xs: "10%", md: "5%" },
        px: { md: 5 },
      }}
    >
      <Container>
        <Grid xs={12} md={6} sx={{ mt: { xs: 0, md: "10%" } }}>
          <Typography
            sx={{
              fontFamily: "RalewayRegular",
              fontSize: "3rem",
              fontWeight: 800,
            }}
          >
            Our Flight Services
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          sx={{
            display: "flex",
            justifyContent: "center",
            px: { xs: 3.5, md: 3.5 },
            // height: "100%",

            mt: { xs: 3, md: 7 },
            backgroundPosition: "center",
            // border: "1px solid red",
          }}
        >
          <Container
            sx={{
              maxWidth: { xs: "100%", md: "90%", lg: "70%" },
              gap: "1.5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* {faqs?.map((item, index) => { */}
            {item.map((item, index) => (
              <Accordion
                // data-aos="flip-down"
                // data-aos-duration="2000"
                //   key={index}
                sx={{
                  backgroundColor: "#5C8AEA",
                  color: "#ffffff",
                  fontFamily: "TomatoGroteskLight",
                  letterSpacing: "0.1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
                xs={10}
                md={11}
                lg={10.7}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
                  }
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem", md: "0.95rem" },
                      fontFamily: "TomatoGroteskLight",
                      letterSpacing: "0.1rem",
                    }}
                  >
                    {/* {item.question} */}
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem", md: "0.95rem" },
                      letterSpacing: "1px",
                    }}
                  >
                    {/* {item.answer} */}
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              // {/* })} */}
            ))}
          </Container>
        </Grid>
      </Container>
    </Grid>
  );
}
