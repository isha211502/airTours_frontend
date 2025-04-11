import {
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useServiceData } from "../../utils/ApiHelper";
export default function ServicesSec4() {
  const { data, isLoading, error } = useServiceData();

  const res = data?.result;
  console.log(res);

  const items = [
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    {
      question: "Our Flight Services Include:",
      title:
        "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      para: "International Flight Bookings – Travel to India, Europe, Asia, and other global",
      title2: "Additional Services",
      para2:
        "Special Assistance, Baggage Services, Priority Check-in, and more.",
      title3: "Premium Services",
      para3: "Lounge Access, Extra Legroom Seats, Exclusive Travel Packages.",
    },
    // Additional items can be added here...
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
              fontSize: "2.5rem",
              fontWeight: 800,
            }}
          >
            Our Flight Services
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            px: { xs: 3.5, md: 3.5 },
            mt: { xs: 3, md: 7 },
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
            {res?.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: "#4E64EE",
                  color: "#ffffff",
                  fontFamily: "TomatoGroteskLight",
                  letterSpacing: "0.1rem",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
                  }
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem", md: "0.95rem" },
                      fontFamily: "RalewayBold",
                    }}
                  >
                    {item.serviceTitle}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem", md: "0.95rem" },
                      fontFamily: "RalewayBold",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item?.paragraph?.map((item, index) => {
                    return (
                      <Typography
                        key={index}
                        sx={{
                          fontSize: {
                            xs: "0.7rem",
                            sm: "0.9rem",
                            md: "0.95rem",
                          },
                          fontFamily: "RalewayRegular",
                          mt: 3,
                        }}
                      >
                        {item}
                      </Typography>
                    );
                  })}

                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem", md: "0.95rem" },
                      fontFamily: "RalewayBold",
                      fontWeight: "500",
                      my: 2,
                    }}
                  >
                    {item.queTitle}
                    {item?.queDetails?.map((item, index) => {
                      return (
                        <ul
                          style={{ paddingLeft: "1rem", margin: "0" }}
                          key={index}
                        >
                          <li>
                            {item.title !== "" && (
                              <Typography
                                sx={{
                                  fontFamily: "RalewayBold",
                                  fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.9rem",
                                    md: "0.95rem",
                                  },
                                }}
                              >
                                {item.title} :
                              </Typography>
                            )}
                            <Typography
                              sx={{
                                fontFamily: "RalewayRegular",
                                fontSize: {
                                  xs: "0.7rem",
                                  sm: "0.9rem",
                                  md: "0.95rem",
                                },
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </li>
                        </ul>
                      );
                    })}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem", md: "0.95rem" },
                      fontFamily: "RalewayBold",
                      fontWeight: "500",
                    }}
                  >
                    {item.bottomTitle}
                    <ol style={{ paddingLeft: "1rem", margin: "0" }}>
                      {item?.bottomSteps?.map((item, index) => {
                        return (
                          <li key={index}>
                            {item.title !== "" && (
                              <Typography
                                sx={{
                                  fontFamily: "RalewayBold",
                                  fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.9rem",
                                    md: "0.95rem",
                                  },
                                }}
                              >
                                {item.title} :
                              </Typography>
                            )}
                            <Typography
                              sx={{
                                fontFamily: "RalewayRegular",
                                fontSize: {
                                  xs: "0.7rem",
                                  sm: "0.9rem",
                                  md: "0.95rem",
                                },
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </li>
                        );
                      })}
                    </ol>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Grid>
      </Container>
    </Grid>
  );
}
