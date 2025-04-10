import { Grid } from "@mui/material";
import React from "react";
import ContactBanner from "../Containers/ContactContainer/ContactBanner";
import ContactSec2 from "../Containers/ContactContainer/ContactSec2";
import ContactSec3 from "../Containers/ContactContainer/ContactSec3";

const Contact = () => {
  return (
    <Grid>
      {/* <ContactBanner /> */}
      <ContactSec2 />
      <ContactSec3 />
    </Grid>
  );
};

export default Contact;
