import React from "react";
import WhyChooseUs from "../Containers/HomeContainers/WhyChooseUs";
import HomeBanner from "../Containers/HomeContainers/HomeBanner";
import HomeText from "../Containers/HomeContainers/HomeText";
import HomeSec1 from "../Containers/HomeContainers/HomeSec1";
import Services from "../Containers/HomeContainers/Services";
import CustomersSpeak from "../Containers/HomeContainers/CustomersSpeak";
import Information from "../Containers/HomeContainers/Information";
import Contact from "../Containers/HomeContainers/Contact";
import { Grid } from "@mui/material";
import LinePlane from "../assets/Svg/pline.svg";
import PlaneTicket from "../assets/Svg/PlaneTicket.svg";

export default function Landing() {
  return (
    <div>
      <Grid
        sx={{
          height: "100vh",
          marginTop: "-100px",
          position: "relative",
          zIndex: -1,
        }}
      >
        <HomeBanner />
      </Grid>
      <Grid
        sx={{
          height: { xs: "62", lg: "70rem" },
          marginTop: { xs: "-90vh", md: "-92vh", lg: "-100vh" },
          position: "relative",
          zIndex: -1,
        }}
      >
        <HomeText />
      </Grid>
      <div style={{ backgroundColor: "#414143" }}>
        <HomeSec1 />
      </div>
      <Grid className="WhyChooseUsBackground">
        <WhyChooseUs />
      </Grid>
      <Grid
        height={"30vh"}
        sx={{ display: { xs: "none", lg: "block", width: "100%" } }}
      >
        <img
          style={{
            paddingLeft: "200px",
            marginTop: "-100px",
            zIndex: 1,
            position: "relative",
          }}
          src={PlaneTicket}
          alt="PlaneTicket"
        />
        <img
          style={{
            marginTop: "-600px",
            position: "relative",
            paddingLeft: "400px",
            zIndex: -1,
          }}
          src={LinePlane}
          alt="LinePlane"
        />
      </Grid>
      <Grid className="servicebackground">
        <Services />
      </Grid>
      <Grid className="customerspeakbackground">
        <CustomersSpeak />
      </Grid>
      <Grid className="informationbackground">
        <Information />
      </Grid>
      <Grid sx={{ backgroundColor: "#333" }}>
        <Contact />
      </Grid>
    </div>
  );
}
