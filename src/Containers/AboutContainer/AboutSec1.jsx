import { Typography, Box, Container, Grid } from "@mui/material";
import { color } from "../../constant";
import { useAboutData } from "../../utils/ApiHelper";
const aboutContent = {
  title: "Our Legacy",
  subtitle: "The Story of Air Tours Inc.",
};

const AboutSec1 = () => {
  const { data, isLoading, error } = useAboutData();

  const res = data?.result;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data!</Typography>;
  }

  return (
    <Container sx={{ my: "5%" }}>
      <Grid container>
        {/* Image Box */}
        <Grid item xs={12} md={6} sx={{width:{xs:"95%",md:"30%"}}} height={"480px"}>
          <img
            src={res?.aboutImgurl}
            alt={"owner Image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit:"cover",
              backgroundColor: "#d3d3d3",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12} md={6} sx={{width:{xs:"95%",md:"65%"},mt:{xs:5,md:0}}} ml={"5%"}>
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
                  fontFamily: "JostRegular",
                  // whiteSpace: "pre-line",
                  letterSpacing: "0.1rem",
                  mt: 3,
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
