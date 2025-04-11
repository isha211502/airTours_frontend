// import { Grid } from "@mui/material";
// import HomeBanner from "../Containers/HomeContainers/HomeBanner";
// import HomeSec1 from "../Containers/HomeContainers/HomeSec1";
// import WhyChooseUs from "../Containers/HomeContainers/WhyChooseUs";
// import Services from "../Containers/HomeContainers/Services";
// import CustomersSpeak from "../Containers/HomeContainers/CustomersSpeak";
// import Information from "../Containers/HomeContainers/Information";
// import Contact from "../Containers/HomeContainers/Contact";
// import HomeText from "../Containers/HomeContainers/HomeText";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
// function Home() {
//   return (
//     <div>
//       {screen ? (
//         <>
//           <Navbar  />
//           <Grid sx={{ display: "flex", justifyContent: "center" }}>
//             {screen}
//           </Grid>
//         </>
//       ) : (
//         <>
//           <Grid
//             sx={{
//               height: "100vh",
//               marginTop: "-100px",
//               position: "relative",
//               zIndex: -1,
//             }}
//           >
//             <HomeBanner />
//           </Grid>
//           <Grid
//             sx={{
//               height: { xs: "62", lg: "70rem" },
//               marginTop: { xs: "-130vh", md: "-92vh", lg: "-100vh" },
//               position: "relative",
//               zIndex: -1,
//             }}
//           >
//             <HomeText />
//           </Grid>
//           <Grid className="Sec1background">
//             <HomeSec1 />
//           </Grid>
//           <Grid className="WhyChooseUsBackground">
//             <WhyChooseUs />
//           </Grid>
//           <Grid className="servicebackground">
//             <Services />
//           </Grid>
//           <Grid className="customerspeakbackground">
//             <CustomersSpeak />
//           </Grid>
//           <Grid className="informationbackground">
//             <Information />
//           </Grid>
//           <Grid className="ContactBackground">
//             <Contact />
//           </Grid>
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default Home;
import React, { useState } from "react";
import { Grid } from "@mui/material";
import HomeBanner from "../Containers/HomeContainers/HomeBanner";
import HomeSec1 from "../Containers/HomeContainers/HomeSec1";
import WhyChooseUs from "../Containers/HomeContainers/WhyChooseUs";
import Services from "../Containers/HomeContainers/Services";
import CustomersSpeak from "../Containers/HomeContainers/CustomersSpeak";
import Information from "../Containers/HomeContainers/Information";
import Contact from "../Containers/HomeContainers/Contact";
import HomeText from "../Containers/HomeContainers/HomeText";
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
