import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DescriptionIcon from "@mui/icons-material/Description";

const features = [
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 40, color: "#3f51b5" }} />,
    title: "24/7 Support",
    description: "Our travel consultants are always ready to assist you.",
  },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: 40, color: "#3f51b5" }} />,
    title: "Customized Travel Solutions",
    description: "We tailor our services to meet your unique travel needs.",
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 40, color: "#3f51b5" }} />,
    title: "Hassle-Free Documentation",
    description: "We handle all the paperwork so you can travel worry-free.",
  },
];

const AbouSec7 = () => {
  return (
    <Box sx={{ px: { xs: 1, md: 5 }, py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Commitment to Customer Satisfaction
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
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
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  px: 2,
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                }}
              >
                {item.icon}
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
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
