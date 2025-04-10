import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { color } from "../../constant";
const contentData = [
  {
    id: 1,
    title: "International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "1International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "2International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "2Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "2International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "3International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "3International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "4International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "4International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "5International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "2Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "5International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "6International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "6International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "7International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "2Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "7International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "8International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "8International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "9International & Domestic Flight Bookings",
    content: [
      { type: "heading", text: "International & Domestic Flight Bookings" },
      {
        type: "paragraph",
        text: "Whether you're planning a trip to India, a vacation abroad, or a domestic journey within the U.S., Air Tours Inc. ensures a seamless travel experience with the best flight deals and hassle-free booking process.",
      },
      {
        type: "heading",
        text: "Why Choose Air Tours Inc. for Flight Bookings?",
      },
      {
        type: "ul",
        items: [
          "9Best Price Guarantee: We offer exclusive deals on international and domestic flights.",
          "Personalized Itineraries: Flexible and customized travel options to match your schedule.",
          "24/7 Support: Our team is available to assist with changes, cancellations, or rescheduling.",
          "Special NRI Offers: Exclusive fares for travelers visiting India or flying internationally.",
        ],
      },
      { type: "heading", text: "Our Flight Services Include:" },
      {
        type: "ol",
        items: [
          "9International Flight Bookings – Travel to India, Europe, Asia, and other global destinations with ease.",
          "Domestic U.S. Flight Reservations – Affordable flights across the United States.",
          "Multi-City & Group Travel Assistance – Simplified bookings for families, corporate groups, or special events.",
          "Last-Minute & Urgent Travel – Get quick ticketing solutions for emergency travel needs.",
          "Baggage & Visa Guidance – Stay informed about airline baggage policies and travel document requirements.",
        ],
      },
    ],
  },
];

function ServicesSec3() {
  const [activeId, setActiveId] = useState(contentData[0].id);

  const activeContent = contentData.find((item) => item.id === activeId);

  return (
    <Container sx={{ paddingY: 6 }}>
      <Typography
        sx={{
          fontFamily: "RalewayRegular",
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: 4,
        }}
      >
        Our Flight Services
      </Typography>

      <Grid container spacing={3}>
        {/* LEFT MENU */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "#F5F5ED",
            color: "#87877F",
            width: "30%",
          }}
        >
          {contentData.map((item) => (
            <Typography
              key={item.id}
              onClick={() => setActiveId(item.id)}
              sx={{
                cursor: "pointer",
                paddingY: 2,
                paddingX: 1,
                borderBottom: "1px solid #007BFF",
                backgroundColor:
                  activeId === item.id ? "#4E64EE" : "transparent",
                color: activeId === item.id ? "#fff" : "#000",
                fontWeight: activeId === item.id ? "bold" : "normal",
                transition: "0.3s",
                paddingY: "11%",
                "&:hover": {
                  backgroundColor: activeId === item.id ? "#3A4AC3" : "#E0E0E0",
                },
              }}
            >
              {item.id}. {item.title}
            </Typography>
          ))}
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid item xs={12} md={8} sx={{ width: "60%" }}>
          {activeContent?.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <Typography
                    key={index}
                    sx={{
                      marginY: "1rem",
                      fontFamily: "RalewayRegular",
                      fontWeight: "700",
                      fontSize: "3rem",
                      lineHeight: "3rem",
                      color: color.blue,
                    }}
                  >
                    {block.text}
                  </Typography>
                );
              case "paragraph":
                return (
                  <Typography
                    key={index}
                    sx={{
                      marginY: "1rem",
                      fontFamily: "JostRegular",
                      fontWeight: "500",
                      fontSize: "1.5rem",
                    }}
                  >
                    {block.text}
                  </Typography>
                );
              case "ul":
                return (
                  <ul
                    key={index}
                    style={{
                      marginY: "3rem",
                    }}
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <Typography
                          style={{
                            fontFamily: "JostRegular",
                            fontSize: "1.2rem",
                            lineHeight: "1.5rem",
                            letterSpacing: "0.1rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={index} style={{ marginY: "2rem" }}>
                    {block.items.map((item, i) => (
                      <li key={i}>
                        <Typography
                          style={{
                            fontFamily: "JostRegular",
                            fontSize: "1.2rem",
                            lineHeight: "1.5rem",
                            letterSpacing: "0.1rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ol>
                );
              default:
                return null;
            }
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServicesSec3;
