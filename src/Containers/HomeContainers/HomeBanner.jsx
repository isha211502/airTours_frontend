import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Background1 from "../../assets/Images/Background4.png";
import Background2 from "../../assets/Images/Background2.png";
import Background3 from "../../assets/Images/Background3.png";
import { Grid } from "@mui/material";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeBanner = () => {
  return (
    <Grid>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <Grid
          sx={{ height: "100vh", objectFit: "contain" }}
          data-src={Background1}
        />

        <Grid
          sx={{ height: "100vh", objectFit: "contain" }}
          data-src={Background2}
        />
        <Grid
          sx={{ height: "100vh", objectFit: "contain" }}
          data-src={Background3}
        />
      </AutoplaySlider>
    </Grid>
  );
};

export default HomeBanner;
