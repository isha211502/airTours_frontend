import { Grid } from "@mui/material";
import React from "react";
// import AboutBanner from "../Containers/AboutContainer/AboutBanner";
import AboutSec1 from "../Containers/AboutContainer/AboutSec1";
import AboutSec2 from "../Containers/AboutContainer/AboutSec2";
import AboutSec3 from "../Containers/AboutContainer/AboutSec3";
import AboutSec4 from "../Containers/AboutContainer/AboutSec4";
import AboutSec5 from "../Containers/AboutContainer/AboutSec5";

const About = () => {
  return (
    <Grid>
      {/* <AboutBanner /> */}
      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />
      <AboutSec4 />
      <div className="AboutSec5Background">
        <AboutSec5 />
      </div>
    </Grid>
  );
};

export default About;
