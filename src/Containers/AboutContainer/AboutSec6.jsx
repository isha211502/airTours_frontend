import { Box, Typography, Stack } from "@mui/material";

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
    <Box sx={{ px: { xs: 1, md: 6 }, py: 5 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" mb={1}>
        A One-Stop Travel Shop for NRIs & Global Travelers
      </Typography>

      {/* Subtitle */}
      <Typography variant="body2" mb={4} maxWidth="800px">
        At Air Tours Inc., we pride ourselves on offering an all-in-one solution
        for travelers. Whether you need a flight to India, assistance with
        passport renewal, OCI services, renunciation of Indian citizenship,
        global entry services, or an exciting international tour, we have you
        covered. We also provide hassle-free <b>e-visa services for India</b> (1
        year, 5 years, and 10 years), ensuring a smooth travel experience.
      </Typography>

      {/* Service List */}
      <Stack spacing={2}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              px: 2,
              py: 1.5,
              borderRadius: 1,
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            <Typography fontWeight="bold" component="span">
              {service.title} —{" "}
            </Typography>
            {service.description}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AboutSec6;
