import { Box, Grid, Typography, Avatar, Container } from "@mui/material";
import { useTeamData } from "../../utils/ApiHelper";
import MOLPlane from "../../assets/Svg/MOLPlan.svg";
const leadershipTeam = [
  {
    name: "Mr. Mafat Patel",
    role: "Founder & President",
    description:
      "A pioneer in travel services, Mr. Patel’s dedication and vision have shaped Air Tours Inc. into a leading travel provider. His journey, from an ambitious student to a successful entrepreneur, inspires us to uphold high standards in customer service and innovation.",
    image: "",
  },
  {
    name: "Mrs. Pravina Patel",
    role: "Manager",
    description:
      "With years of experience in travel consultation and client relations, Mrs. Patel ensures that every traveler receives a seamless experience. Under her leadership, Air Tours Inc. continues to grow, delivering excellence in travel solutions.",
    image: "",
  },
  {
    name: "Our Dedicated Team",
    role: "At the heart of Air Tours Inc.",
    description:
      "Our team is made of experienced consultants, travel specialists, and customer service reps who provide reliable and personalized travel experiences. We’re trained to handle complex travel requirements and ensure journeys are smooth and hassle-free.",
    image: "",
  },
];

const AboutSec5 = () => {
  const { data, isLoading, error } = useTeamData();

  const res = data?.result;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data!</Typography>;
  }
  return (
    <Grid>
      <Container sx={{ display: "flex" }}>
        <Box sx={{ px: { xs: 1, md: 0 }, py: 5 }}>
          {/* Section Title */}
          <Typography
            mb={1}
            sx={{
              fontSize: "3rem",
              lineHeight: "3rem",
              fontWeight: 700,
              fontFamily: "RalewayBold",
            }}
          >
            Meet Our Leadership & Team
          </Typography>
          <Typography
            mb={4}
            sx={{
              fontSize: "1rem",
              fontFamily: "JostRegular",
              fontWeight: 700,
              letterSpacing: "0.1rem",
            }}
          >
            The Visionary Behind Air Tours Inc.
          </Typography>

          {/* Cards */}
          <Grid container spacing={4}>
            {res?.map((member, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: {
                      xs: "flex-start",
                      sm: "center",
                      md: "flex-start",
                    },
                    letterSpacing: "0.1rem",
                    paddingX: { xs: 0, md: 3 },
                    borderRadius: 2,
                  }}
                >
                  {/* Info */}
                  <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        fontFamily: "JostRegular",
                        letterSpacing: "0.1rem",
                      }}
                    >
                      {member.name},{" "}
                      <span
                        style={{ fontFamily: "JostRegular", fontWeight: 800 }}
                      >
                        {member.position}
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "500",
                        fontFamily: "JostRegular",
                        // letterSpacing: "0.1rem",
                      }}
                      mt={1}
                    >
                      {member.paragraph}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hidden on xs, flex on md and larger
            alignItems: "center",
          }}
        >
          <img src={MOLPlane} alt="" />
        </Box>
      </Container>
    </Grid>
  );
};

export default AboutSec5;
