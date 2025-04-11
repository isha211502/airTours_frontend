import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ServicesSec1 from "../Containers/ServicesContainer/ServicesSec1";
import ServicesSec2 from "../Containers/ServicesContainer/ServicesSec2";
import ServicesSec3 from "../Containers/ServicesContainer/ServicesSec3";
import ServicesSec4 from "../Containers/ServicesContainer/ServicesSec4";
import Contact from "../Containers/HomeContainers/Contact";

const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // xs, sm

  return (
    <Grid>
      <div className="servicesbanner" style={{ marginTop: "-97px" }}>
        <ServicesSec1 />
      </div>
      {/* <ServicesSec2 /> */}
      {/* Show ServicesSec4 only on small screens (xs, sm), otherwise show ServicesSec3 */}
      {isSmallScreen ? <ServicesSec4 /> : <ServicesSec3 />}
      <Grid sx={{ backgroundColor: "#333" }}>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Services;
