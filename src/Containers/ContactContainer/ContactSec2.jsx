import { Business, Email, Today, WifiCalling } from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
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
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flex: 1,
              backgroundColor: color.blue,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
            }}
          >
            <Grid
              sx={{
                borderTop: "1px solid #ffffff",
                borderLeft: "1px solid #ffffff",
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
              <IconButton>
                <WifiCalling
                  sx={{ color: "#ffffff", fontSize: "3rem", mb: "1rem" }}
                />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "1rem ",
                  fontFamily: "TomatoGroteskRegular",
                  mb: "0.5rem",
                }}
              >
                {/* {"Call Us"} */} Phone
              </Typography>
              <Typography>847 301 7777 </Typography>
              <Typography>773 764 4544 </Typography>
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
              backgroundColor: color.blue,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
            }}
          >
            <Grid
              sx={{
                borderTop: "1px solid #ffffff",
                borderLeft: "1px solid #ffffff",
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
              <IconButton>
                <Email
                  sx={{ color: "#ffffff", fontSize: "3rem", mb: "1rem" }}
                />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "1rem ",
                  fontFamily: "TomatoGroteskRegular",
                  mb: "0.5rem",
                }}
              >
                {/* {"Email"} */}Email:
              </Typography>
              <Typography>pravinaptel@airtoursinc.us</Typography>
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
              backgroundColor: color.blue,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
            }}
          >
            <Grid
              sx={{
                borderTop: "1px solid #ffffff",
                borderLeft: "1px solid #ffffff",
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
              <IconButton>
                <Business
                  sx={{ color: "#ffffff", fontSize: "3rem", mb: "1rem" }}
                />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "1rem ",
                  fontFamily: "TomatoGroteskRegular",
                  mb: "0.5rem",
                }}
              >
                {/* {"Address"} */}Address:
              </Typography>
              <Typography>831 W Higgins Road, Schaumburg, IL 60195</Typography>
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
              backgroundColor: color.blue,
              color: color.white,
              paddingTop: "0.7rem",
              paddingLeft: "0.7rem",
            }}
          >
            <Grid
              sx={{
                borderTop: "1px solid #ffffff",
                borderLeft: "1px solid #ffffff",
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
              <IconButton>
                <Today
                  sx={{ color: "#ffffff", fontSize: "3rem", mb: "1rem" }}
                />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "1rem ",
                  fontFamily: "TomatoGroteskRegular",
                  mb: "0.5rem",
                }}
              >
                Opening Hours
              </Typography>
              <Typography>831 W Higgins Road, Schaumburg, IL 60195</Typography>

              <>
                <Typography
                  //   key={index}
                  sx={{
                    fontSize: "1rem ",
                    fontFamily: "TomatoGroteskRegular",
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
