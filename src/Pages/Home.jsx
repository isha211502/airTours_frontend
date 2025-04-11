import React, { useState } from "react";
import { Grid } from "@mui/material";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Landing from "./Landing";

function Home({ screen }) {
  return (
    <Grid>
      <Navbar />
      {screen ? <Grid>{screen}</Grid> : <Landing />}

      <Footer />
    </Grid>
  );
}

export default Home;
