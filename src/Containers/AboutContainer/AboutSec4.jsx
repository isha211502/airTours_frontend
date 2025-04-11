import { Grid, Box, Typography, Container } from "@mui/material";
import { color } from "../../constant";
import { useAboutData } from "../../utils/ApiHelper";
const chooseUsData = [
  {
    title: "30+ Years of Industry Leadership",
    description: "A proven track record of excellence.",
  },
  {
    title: "Preferred Partner of Air India",
    description: "Access to exclusive fares and services.",
  },
  {
    title: "Comprehensive Travel Services",
    description: "Everything from ticketing to tours and more under one roof.",
  },
  {
    title: "Global Network & Expertise",
    description: "Leverage our knowledge to create your dream trip.",
  },
  {
    title: "Unmatched Customer Support",
    description: "Personalized travel assistance available at every step.",
  },
];

const AboutSec4 = () => {
  const { data, isLoading, error } = useAboutData();

  const res = data?.result;
  
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data!</Typography>;
  }
  return (
    <Grid>
      <Container>
        <Box sx={{ width: "100%", py: 5 }}>
          <Typography
            sx={{
              fontFamily: "RalewayBold",
              fontSize: "3rem",
              lineHeight: "3rem",
              fontWeight: 700,
              color: color.blue,
            }}
          >
            Why Choose Air Tours Inc.?
          </Typography>
          <Typography
            sx={{
              fontFamily: "JostRegular",
              fontSize: "1.2rem",
              paddingY: "1.5rem",
              // letterSpacing: "0.1rem",
            }}
          >
            With a wealth of experience and a dedicated team, we stand out as a
            premier travel agency in the U.S. Here's why travelers prefer Air
            Tours Inc.
          </Typography>

          <Grid container spacing={3} sx={{justifyContent:{xs:"center",md:"normal"}}}>
            {res?.chooseUs?.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={2} lg={2}>
                <Box
                  sx={{
                    backgroundColor: color.blue,
                    color: color.white,
                    p: 1,
                    borderRadius: 2,
                    letterSpacing: "0.1rem",
                    height: "100%",
                    width: { xs: "250px", md: "180px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: color.white,
                      fontSize: "1rem",
                      letterSpacing: "0.1rem",
                      fontWeight: "700",
                      fontFamily: "JostRegular",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "2rem",
                      // letterSpacing: "0.1rem",
                      color: color.white,
                      fontSize: "1rem",
                      fontFamily: "JostRegular",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
};

export default AboutSec4;
