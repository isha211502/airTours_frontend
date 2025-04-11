import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Background1 from "../../assets/Images/Background4.png";
import Background2 from "../../assets/Images/Background2.png";
import Background6 from "../../assets/Images/Background6.png";
import Background5 from "../../assets/Images/Background1.png";
import Background3 from "../../assets/Images/Background3.png";
import { Grid, Typography } from "@mui/material";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeBanner = () => {
  return (
    <Grid>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        bullets={false}
        organicArrows={false}
      >
        {/* Slide 1 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Background1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            // opacity: 0.5,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-8%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "3rem",
                    lg: "6rem",
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
                    lg: "2.8rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                {/* <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "} */}
                <span
                  style={{
                    position: "relative",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    marginRight: "1%",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  STOP
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "1px solid yellow",
                    }}
                  ></span>
                  {/* Top-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Top-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                </span>
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.3rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.7rem",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background2})`,
            // backgroundBlendMode: "lighten",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            // opacity: 0.5,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-8%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "3rem",
                    lg: "6rem",
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
                    lg: "2.8rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                {/* <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "} */}
                <span
                  style={{
                    position: "relative",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    marginRight: "1%",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  STOP
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "1px solid yellow",
                    }}
                  ></span>
                  {/* Top-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Top-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                </span>
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.3rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.7rem",
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

        {/* Slide 3 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            // opacity: 1.5,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-8%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "3rem",
                    lg: "6rem",
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
                    lg: "2.8rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                {/* <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "} */}
                <span
                  style={{
                    position: "relative",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    marginRight: "1%",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  STOP
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "1px solid yellow",
                    }}
                  ></span>
                  {/* Top-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Top-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                </span>
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.3rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.7rem",
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
        {/* Slide 4 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Background3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            // opacity: 0.5,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-8%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "3rem",
                    lg: "6rem",
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
                    lg: "2.8rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                {/* <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "} */}
                <span
                  style={{
                    position: "relative",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    marginRight: "1%",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  STOP
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "1px solid yellow",
                    }}
                  ></span>
                  {/* Top-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Top-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                </span>
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.3rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.7rem",
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
        {/* Slide 5 */}
        <div
          style={{
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            // opacity: 0.5,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "0px", lg: "-8%" },
            }}
          >
            <Grid sx={{ width: "70%" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "6rem",
                  },
                  fontFamily: "RalewayBold",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "3rem",
                    lg: "6rem",
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
                    lg: "2.8rem",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Your One <br />{" "}
                {/* <span
                  style={{
                    border: "1px solid yellow",
                    padding: "5px",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                  }}
                >
                  STOP
                </span>{" "} */}
                <span
                  style={{
                    position: "relative",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    marginRight: "1%",
                    fontFamily: "RalewayBold",
                    fontWeight: 400,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  STOP
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "1px solid yellow",
                    }}
                  ></span>
                  {/* Top-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Top-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderTop: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-left corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderLeft: "2px solid yellow",
                    }}
                  ></span>
                  {/* Bottom-right corner */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "5px",
                      height: "5px",
                      borderBottom: "2px solid yellow",
                      borderRight: "2px solid yellow",
                    }}
                  ></span>
                </span>
                Travel Partner{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1rem",
                    lg: "1.3rem",
                  },
                  marginTop: { xs: "0.5rem", lg: "2rem" },
                  fontFamily: "JostRegular",
                  lineHeight: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.7rem",
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
      </AutoplaySlider>
    </Grid>
  );
};

export default HomeBanner;
