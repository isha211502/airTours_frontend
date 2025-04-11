import { Business, Email, Today, WifiCalling } from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ContactIcon1 from "../../assets/Svg/ContactIcon1.svg";
import ContactIcon2 from "../../assets/Svg/ContactIcon2.svg";
import ContactIcon3 from "../../assets/Svg/ContactIcon3.svg";
import ContactIcon4 from "../../assets/Svg/ContactIcon4.svg";
import { color } from "../../constant";
const ContactSec2 = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        my: { xs: "10%", md: "5%" },
        px: { xs: 3.5, md: 3.5 },
        height: "100%",
      }}
    >
      <Container
        sx={{
          maxWidth: { xs: "100%", md: "90%", lg: "70%" },
          gap: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            display: "flex",
            gap: { xs: "1.5rem", xl: "3rem" },
            flexDirection: { xs: "column", md: "column", lg: "row" },
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
              gap: "0.5rem",
              flex: 1,
              backgroundColor: color.dark,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          >
            <Grid
              sx={{
                flex: 1,
                padding: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                pb: "2rem",
              }}
            >
              <img
                src={ContactIcon1}
                style={{ height: "30%", width: "30%", marginTop: "1.5rem" }}
                alt=""
              />

              <Typography
                sx={{
                  fontSize: "1rem ",
                  // fontFamily: "JostRegular",
                  marginTop: "2.5rem",
                  // fontSize: "1rem ",
                  fontFamily: "JostBold",
                  // fontWeight: 500,
                }}
              >
                {/* {"Call Us"} */} Mobile No
              </Typography>
              <Typography sx={{ fontFamily: "JostRegular", fontSize: "1rem" }}>
                847 301 7777{" "}
              </Typography>
              <Typography sx={{ fontFamily: "JostRegular", fontSize: "1rem" }}>
                773 764 4544{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flex: 1,
              height: "300px",
              backgroundColor: color.dark,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          >
            <Grid
              sx={{
                flex: 1,
                // padding: "1rem",
                padding: { xs: "1rem", lg: "0rem" },
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                pb: "2rem",
              }}
            >
              <img
                src={ContactIcon2}
                style={{ height: "30%", width: "30%", marginTop: "1.5rem" }}
                alt=""
              />
              <Typography
                sx={{
                  fontFamily: "JostBold",
                  marginTop: "2.5rem",
                  // fontSize: "1rem ",
                  // fontFamily: "JostBold",
                  // fontWeight: 600,
                }}
              >
                {/* {"Email"} */}Email Address
              </Typography>
              <Typography
                sx={{
                  fontFamily: "JostRegular",
                  fontSize: { xs: "1rem", lg: "0.8rem" },
                }}
              >
                pravinaptel@airtoursinc.us
              </Typography>
            </Grid>
          </Grid>
          <Grid
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flex: 1,
              backgroundColor: color.dark,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
              height: "300px",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          >
            <Grid
              sx={{
                flex: 1,
                padding: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                pb: "2rem",
              }}
            >
              <img
                src={ContactIcon3}
                style={{ height: "30%", width: "30%", marginTop: "1.5rem" }}
                alt=""
              />
              <Typography
                sx={{
                  fontSize: "1rem ",
                  fontFamily: "JostBold",
                  // fontWeight: 600,

                  marginTop: "2.5rem",
                }}
              >
                {/* {"Address"} */}Our Location
              </Typography>
              <Typography sx={{ fontFamily: "JostRegular", fontSize: "1rem" }}>
                831 W Higgins Road, Schaumburg, IL 60195
              </Typography>
            </Grid>
          </Grid>
          <Grid
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flex: 1,
              height: "300px",
              backgroundColor: color.dark,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          >
            <Grid
              sx={{
                flex: 1,
                padding: "1rem",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                pb: "2rem",
              }}
            >
              <img
                src={ContactIcon4}
                style={{ height: "30%", width: "30%", marginTop: "1.5rem" }}
                alt=""
              />
              <Typography
                sx={{
                  fontSize: "1rem ",
                  marginTop: "2.5rem",
                  fontFamily: "JostBold",
                  // fontWeight: 6    00,
                }}
              >
                Office Hour
              </Typography>
              <Typography sx={{ fontFamily: "JostRegular", fontSize: "1rem" }}>
                Monday – Friday
              </Typography>{" "}
              <Typography sx={{ fontFamily: "JostRegular", fontSize: "1rem" }}>
                {" "}
                11:00 AM – 04:00 PM
              </Typography>
              <>
                <Typography
                  //   key={index}
                  sx={{
                    fontSize: "1rem ",
                    fontFamily: "JostRegular",
                  }}
                >
                  {/* {item.hours} */}
                </Typography>
              </>
              {/* })} */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default ContactSec2;
