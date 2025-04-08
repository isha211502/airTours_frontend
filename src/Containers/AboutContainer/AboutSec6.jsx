import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import { color } from "../../constant";
const services = [
  {
    title: "Flight Bookings",
    description:
      "We secure the best fares on domestic and international flights.",
  },
  {
    title: "Documentation Assistance",
    description:
      "From Indian passports to OCI applications, renunciation, and e-visas, we simplify the paperwork.",
  },
  {
    title: "Global Entry Service",
    description: "Fast-track entry into the U.S. with expert guidance.",
  },
  {
    title: "Renunciation of Indian Citizenship",
    description: "Seamless process with complete assistance.",
  },
  {
    title: "E-Visa for India (1 Year, 5 Years, 10 Years)",
    description:
      "Quick approvals for tourists, business travelers, and medical visitors.",
  },
];

const AboutSec6 = () => {
  return (
    <Grid>
      <Container>
        <Box sx={{ px: { xs: 1, md: 0 }, py: 5 }}>
          {/* Title */}
          <Typography
            sx={{
              fontFamily: "RalewayBold",
              fontWeight: 700,
              fontSize: "3rem",
              lineHeight: "3rem",
            }}
            mb={1}
          >
            A One-Stop Travel Shop for NRIs & Global Travelers
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "JostRegular",
              fontWeight: 500,
              fontSize: "1.5rem",
              marginY: "1rem",
            }}
          >
            At Air Tours Inc., we pride ourselves on offering an all-in-one
            solution for travelers. Whether you need a flight to India,
            assistance with passport renewal, OCI services, renunciation of
            Indian citizenship, global entry services, or an exciting
            international tour, we have you covered. We also provide hassle-free{" "}
            <b>e-visa services for India</b> (1 year, 5 years, and 10 years),
            ensuring a smooth travel experience.
          </Typography>

          <Box spacing={2}>
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: color.lightdark,
                  color: color.white,
                  px: 2,
                  py: 1.5,
                  borderRadius: 1,
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                  marginY: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "1.2rem" }}>
                  {service.title} —{" "}
                </Typography>
                {service.description}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};

export default AboutSec6;
