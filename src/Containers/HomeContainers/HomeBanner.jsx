import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Background1 from "../../assets/Images/Background4.png";
import Background2 from "../../assets/Images/Background2.png";
import Background3 from "../../assets/Images/Background3.png";
import { Grid, Typography } from "@mui/material";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeBanner = () => {
  return (
    <Grid>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        bullets={false}
        organicArrows={false}
      >
        {/* Slide 1 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${Background1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-10%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "4rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "7rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Welcome to Air Tours Inc
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.3rem",
                    md: "2.7rem",
                    lg: "3rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "}
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.5rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "2rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                  fontWeight: 500,
                  latterSpaceing: "0.01rem",
                }}
              >
                For over 30 years, Air Tours Inc. has been a trusted name in the
                travel industry offering a seamless travel experience to NRIs
                and global ravelers. Whether you're booking international
                flights, renewing your passport, applying for an OCI card, or
                planning an unforgettable cruise, we are here to make your
                journey smooth and hassle-free. As Air India’s preferred partner
                and one of the largest travel consolidators in the USA, we bring
                you the best deals, premium v xservices, and expert assistance
                to make every trip amemorable one.
              </Typography>
            </Grid>
          </Grid>
        </div>

        {/* Slide 2 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${Background2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-10%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "4rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "1rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "7rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Welcome to Air Tours Inc
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.3rem",
                    md: "2.7rem",
                    lg: "3rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "}
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.5rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "2rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                  fontWeight: 500,
                  letterSpacing: "0.1rem",
                }}
              >
                For over 30 years, Air Tours Inc. has been a trusted name in the
                travel industry offering a seamless travel experience to NRIs
                and global ravelers. Whether you're booking international
                flights, renewing your passport, applying for an OCI card, or
                planning an unforgettable cruise, we are here to make your
                journey smooth and hassle-free. As Air India’s preferred partner
                and one of the largest travel consolidators in the USA, we bring
                you the best deals, premium v xservices, and expert assistance
                to make every trip amemorable one.
              </Typography>
            </Grid>
          </Grid>
        </div>

        {/* Slide 3 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `url(${Background3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-10%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "4rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "1rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "7rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Welcome to Air Tours Inc
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.3rem",
                    md: "2.7rem",
                    lg: "3rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                  }}
                >
                  STOP
                </span>{" "}
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.5rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "2rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                  fontWeight: 500,
                  letterSpacing: "0.1rem",
                }}
              >
                For over 30 years, Air Tours Inc. has been a trusted name in the
                travel industry offering a seamless travel experience to NRIs
                and global ravelers. Whether you're booking international
                flights, renewing your passport, applying for an OCI card, or
                planning an unforgettable cruise, we are here to make your
                journey smooth and hassle-free. As Air India’s preferred partner
                and one of the largest travel consolidators in the USA, we bring
                you the best deals, premium v xservices, and expert assistance
                to make every trip amemorable one.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </AutoplaySlider>
    </Grid>
  );
};

export default HomeBanner;
