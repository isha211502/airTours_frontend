import { Grid, Typography, Box } from "@mui/material";
import { color } from "../../constant";
const aboutContent = {
  title: "Our Legacy",
  subtitle: "The Story of Air Tours Inc.",
  description: `
    Air Tours Inc. was founded by Mr. Mafat Patel, a visionary entrepreneur whose journey
    from a small village in India to the United States is a testament to determination, ambition,
    and service to the community. Arriving in the U.S. in 1968, he pursued higher education and
    later established Patel Brothers, the largest Indian grocery chain in America. However, his
    deep passion for travel led him to create Air Tours Inc., a company dedicated to making
    travel seamless, affordable, and hassle-free for NRI and global travelers.

    From its humble beginnings, Air Tours Inc. has grown into one of the most trusted travel
    agencies in the United States. With over 30 years of experience, we have built a reputation
    for reliability, personalized service, and expertise in handling complex travel needs.
  `,
};

const AboutSec1 = () => {
  return (
    <Grid
      gap={8}
      spacing={3}
      alignItems="center"
      sx={{
        // border: "1px solid red",
        marginY: 7,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        padding: { xs: "1rem", md: "0rem" },
      }}
    >
      {/* Image Box */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            width: "300px",
            height: "400px",
            backgroundColor: "#d3d3d3",
            borderRight: "8px solid #4E64EE",
            borderBottom: "8px solid #4E64EE",
          }}
        />
      </Grid>

      {/* Text Content */}
      <Grid item xs={12} md={7}>
        <Typography
          sx={{
            color: color.blue,
            fontSize: "3rem",
            lineHeight: "2.5rem",
            fontWeight: "700",
            fontFamily: "RalewayRegular",
          }}
        >
          {aboutContent.title}
        </Typography>
        <Typography
          sx={{
            color: color.blue,
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: "RalewayRegular",
          }}
        >
          {aboutContent.subtitle}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            lineHeight: "1.5rem",
            fontWeight: "700",
            fontFamily: "JostRegular",
            whiteSpace: "pre-line",
          }}
        >
          {aboutContent.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutSec1;
