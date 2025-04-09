import React from "react";
import WhyChooseUs from "../Containers/HomeContainers/WhyChooseUs";
import HomeBanner from "../Containers/HomeContainers/HomeBanner";
import HomeText from "../Containers/HomeContainers/HomeText";
import HomeSec1 from "../Containers/HomeContainers/HomeSec1";
import Services from "../Containers/HomeContainers/Services";
import CustomersSpeak from "../Containers/HomeContainers/CustomersSpeak";
import Information from "../Containers/HomeContainers/Information";
import Contact from "../Containers/HomeContainers/Contact";
// import { Grid } from "@mui/material";
import LinePlane from "../assets/Svg/pline.svg";
import WCUBackground2 from "../assets/Svg/WCUBackground2.svg";
import { Grid } from "@mui/material";

export default function Landing() {
  return (
    <Grid>
      <Grid
        sx={{
          // height: { xs: "35vh", sm: "40vh", md: "100vh", lg: "100vh" },
          marginTop: { xs: "-72px", sm: "-98px" },
          position: "relative",
          zIndex: -1,
        }}
      >
        <HomeBanner />
      </Grid>
      {/* <div
        className="homesec1"
        sx={{
          height: { xs: "62", lg: "70rem" },
          marginTop: { xs: "-90vh", md: "-92vh", lg: "-100vh" },
          position: "relative",
          zIndex: -1,
        }}
      >
        <HomeText />
      </div> */}
      <div style={{ backgroundColor: "#414143", marginTop: "-10%" }}>
        <HomeSec1 />
      </div>
      <Grid className="WhyChooseUsBackground">
        <WhyChooseUs />
      </Grid>
      {/* <Grid
        height={"30vh"}
        sx={{ display: { xs: "none", lg: "block", width: "70%" } }}
      >
        <img
          style={{
            paddingLeft: "5%",
            marginTop: "-10%",
            zIndex: 1,
            position: "relative",
          }}
          src={PlaneTicket}
          alt="PlaneTicket"
        />
        <img
          style={{
            width: "90%",
            marginTop: "-90%",
            position: "relative",
            paddingLeft: "30%",
            zIndex: -1,
          }}
          src={LinePlane}
          alt="LinePlane"
        />
      </Grid> */}
      {/* <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-6%",
          zIndex: "-1",
          position: "relative",
        }}
      >
        <img src={WCUBackground2} alt="" />
      </Grid> */}
      <Grid className="servicebackground">
        <Services />
      </Grid>
      <Grid className="customerspeakbackground">
        <CustomersSpeak />
      </Grid>
      <Grid
        className="informationbackground"
        sx={{ marginTop: { xs: "0rem", md: "14%" } }}
      >
        <Information />
      </Grid>
    </Grid>
  );
}
