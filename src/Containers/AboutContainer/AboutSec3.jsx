import { Grid, Box, Typography, Container } from "@mui/material";
import { color } from "../../constant";
const coreValues = [
  {
    title: "Integrity & Transparency",
    description: "Trust and honesty form the foundation of our relationships.",
  },
  {
    title: "Commitment to Excellence",
    description: "We go beyond expectations to deliver high-quality service.",
  },
  {
    title: "Continuous Improvement",
    description: "We evolve with industry trends to enhance our offerings.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Every service is designed with customer satisfaction in mind.",
  },
  {
    title: "Ethical Business Practices",
    description:
      "We uphold the highest professional standards in all dealings.",
  },
];

const AboutSec3 = () => {
  return (
    <Grid sx={{ width: "100%" }}>
      <Container>
        <Box sx={{ py: 5, px: { xs: 1, md: 0 } }}>
          <Grid spacing={3} alignItems="center" justifyContent="space-around">
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: color.blue,
                    fontWeight: 700,
                    fontFamily: "RalewayBold",
                    fontSize: "3rem",
                    lineHeight: "3rem",
                  }}
                >
                  Core Values That Drive Us
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                textAlign={{ xs: "left", md: "right" }}
              >
                <Typography
                  sx={{
                    fontFamily: "JostRegular",
                    fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
                    fontWeight: 600,
                    marginY: { xs: "1rem", md: "0rem" },
                    letterSpacing: "0.1rem",
                  }}
                >
                  At Air Tours Inc., we operate with a <br /> commitment to the
                  following principles
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            {coreValues.map((value, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: color.lightdark,
                  color: color.white,
                  paddingY: 1,
                  my: 1,
                  borderRadius: 1,
                  fontFamily: "JostRegular",
                  textAlign: "center",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  px: { xs: 3,md: 2 },
                  fontWeight: "600",
                  letterSpacing: "0.1em",
                }}
              >
                {value.title} —{" "}
                <span style={{ fontWeight: "300" }}>{value.description}</span>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};

export default AboutSec3;
