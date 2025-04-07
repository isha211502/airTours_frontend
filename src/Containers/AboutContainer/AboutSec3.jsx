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
                    fontFamily: "RalewayRegular",
                    fontSize: { xs: "1.7rem", md: "2rem" },
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
                <Typography sx={{ fontFamily: "JostRegular", fontWeight: 500 }}>
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
                  backgroundColor: color.dark,
                  color: color.white,
                  p: 2,
                  my: 1,
                  borderRadius: 1,
                  fontFamily: "JostRegular",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "600",
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
