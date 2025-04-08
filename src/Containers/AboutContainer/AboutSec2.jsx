import { Grid, Box, Typography, Container } from "@mui/material";
import { color } from "../../constant";
const missionVisionData = [
  {
    title: "Mission",
    description:
      "At Air Tours Inc., our mission is to offer unparalleled travel services, making journeys stress-free, memorable, and convenient. We strive to bring travelers closer to their destination while ensuring seamless experiences through efficient ticketing, documentation, and customized packages.",
  },
  {
    title: "Vision",
    description:
      "To be the most trusted travel service provider, continuously innovating and expanding our global presence. Our vision is to set new standards in the travel industry by providing cutting-edge solutions and exceptional customer service.",
  },
];

const AboutSec2 = () => {
  return (
    <Box sx={{ width: "100%", py: 5 }}>
      <Container>
        <Typography
          sx={{
            fontFamily: "RalewayBold",
            fontSize: "3rem",
            lineHeight: "3rem",
            color: color.blue,
            fontWeight: "700",
          }}
          mb={3}
        >
          Our Mission & Vision
        </Typography>

        {/* Cards Container */}
        <Grid container spacing={3} justifyContent="center">
          {missionVisionData.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row", lg: "row" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: color.blue,
                  height: { xs: "auto", md: "190px" },
                  width: { xs: "auto", md: "500px" },
                  color: color.white,
                  p: 3,
                  borderRadius: 2,
                  textAlign: "left",
                }}
              >
                <Typography
                  mb={1}
                  sx={{
                    fontSize: "1.5rem",
                    fontFamily: "JostRegular",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontFamily: "JostRegular",
                    fontWeight: 500,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSec2;
