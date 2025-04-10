import { Grid, Typography, Box, Container } from "@mui/material";
import { color } from "../../constant";
import { useAboutData } from "../../utils/ApiHelper";
const aboutContent = {
  title: "Our Legacy",
  subtitle: "The Story of Air Tours Inc.",
};

const AboutSec1 = () => {
  const { data, isLoading, error } = useAboutData();

  const res = data?.result;
  console.log(res);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data!</Typography>;
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          // border: "1px solid red",
          marginY: 7,
          display: "flex",
          // flexDirection: { xs: "column", md: "row" },
          // justifyContent: "center",
          // padding: { xs: "1rem", md: "0rem" },
        }}
      >
        {/* Image Box */}
        <Grid item xs={12} md={6}>
          <Box
            src={res?.aboutImgurl}
            sx={{
              width: "300px",
              height: "400px",
              backgroundColor: "#d3d3d3",
              borderRight: "1.5rem solid #4E64EE",
              borderBottom: "1.5rem solid #4E64EE",
            }}
          />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: color.blue,
              fontSize: "3rem",
              lineHeight: "2.5rem",
              fontWeight: "700",
              fontFamily: "RalewayBold",
            }}
          >
            {aboutContent.title}
          </Typography>
          <Typography
            sx={{
              color: color.blue,
              fontSize: "3rem",
              fontWeight: "700",
              fontFamily: "RalewayBold",
            }}
          >
            {aboutContent.subtitle}
          </Typography>

          {res?.aboutParagraph?.map((item, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: "1.2rem",
                  lineHeight: "1.5rem",
                  fontWeight: "700",
                  fontFamily: "JostRegular",
                  whiteSpace: "pre-line",
                  letterSpacing: "0.1rem",
                  mt: 5,
                }}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSec1;
