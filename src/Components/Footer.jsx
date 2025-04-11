// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Link,
//   Grid,
// } from "@mui/material";
// import Linkdin from "../assets/Svg/Linkdin.svg";
// import Facebook from "../assets/Svg/Facebook.svg";
// import Instagram from "../assets/Svg/Instaram.svg";
// import logo from "../assets/Images/ATILogo.jpg";
// import { useNavigate } from "react-router-dom";
// import { path } from "../constant";
// const Footer = () => {
//   const navigate = useNavigate();
//   return (
//     <Grid
//       container
//       sx={{
//         px: { xs: "1rem", lg: "8rem" },
//         alignItems: "center",
//         py: { xs: "1rem", lg: "2rem" },
//       }}
//     >
//       {/* Left Section */}
//       <Grid item xs={12} md={4} border={"1px solid blue"}>
//         <Typography
//           fontFamily="RalewayRegular"
//           fontSize="1rem"
//           color="#4E64EE"
//           fontWeight="700"
//           sx={{ cursor: "pointer" }}
//           onClick={() => navigate(path.home)}
//         >
//           <img src={logo} alt="" style={{ height: "30%", width: "30%" }} />
//         </Typography>
//         <Typography
//           fontFamily="JostRegular"
//           fontSize="1.2rem"
//           color="#4E64EE"
//           fontWeight="bold"
//           sx={{ my: 3 }}
//         >
//           831 W Higgins Road, Schaumburg,
//           <br /> IL 60195
//         </Typography>
//         <Typography
//           fontFamily="JostRegular"
//           fontSize="1.2rem"
//           color="#4E64EE"
//           fontWeight="bold"
//           sx={{ my: 3 }}
//         >
//           Copyright © 2025 Air Tours Inc. | <br />
//           All rights reserved
//         </Typography>
//       </Grid>

//       {/* Center Section */}
//       <Grid
//         border={"1px solid blue"}
//         item
//         xs={12}
//         md={4}
//         sx={{
//           marginY: {
//             xs: "1rem",
//             sm: "0rem",
//           },
//         }}
//       >
//         <Typography
//           fontFamily="RalewayRegular"
//           fontSize="1.5rem"
//           color="#4E64EE"
//           fontWeight="700"
//         >
//           Quick Links
//         </Typography>
//         {["Home", "About", "Service", "Contact"].map((text) => (
//           <Typography key={text}>
//             <Link
//               href="#"
//               fontFamily="RalewayRegular"
//               fontSize="1.2rem"
//               color="#4E64EE"
//               fontWeight="500"
//               sx={{
//                 textDecoration: "none",
//                 display: "block",
//                 lineHeight: "2.5rem",
//               }}
//             >
//               {text}
//             </Link>
//           </Typography>
//         ))}
//       </Grid>

//       {/* Right Section */}
//       <Grid
//         border={"1px solid blue"}
//         item
//         xs={12}
//         sm={4}
//         md={4}
//         sx={{
//           paddingBottom: {
//             xs: "1.5rem",
//             md: "0rem",
//           },
//         }}
//       >
//         <Typography
//           fontFamily="RalewayRegular"
//           fontSize="1.5rem"
//           color="#4E64EE"
//           fontWeight="700"
//         >
//           Follow Us On
//         </Typography>
//         <Box mt={2} sx={{ display: "flex", justifyContent: "space-around" }}>
//           <Grid href="#">
//             <img
//               src={Facebook}
//               alt=""
//               style={{ height: "2rem", width: "2rem" }}
//             />
//           </Grid>
//           <Grid href="#">
//             <img
//               src={Instagram}
//               alt=""
//               style={{ height: "2rem", width: "2rem" }}
//             />
//           </Grid>
//           <Grid href="#">
//             <img
//               src={Linkdin}
//               alt=""
//               style={{ height: "2rem", width: "2rem" }}
//             />
//           </Grid>
//         </Box>
//       </Grid>
//     </Grid>
//     // </Container>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import logo from "../assets/Images/ATILogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../constant";
import FacebookIcon from "../assets/Svg/Instaram.svg";
import InstagramIcon from "../assets/Svg/Facebook.svg";
import LinkedInIcon from "../assets/Svg/Linkdin.svg";
const pages = ["Home", "About", "Service", "Contact"];
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 3, lg: 6 } }}>
      <Grid
        container
        sx={{
          px: { xs: 2, md: 5, lg: 0 },
          justifyContent: {
            xs: "normal",
            md: "space-between",
            lg: "space-evenly",
          },
        }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{ cursor: "pointer", mb: 2 }}
            onClick={() => {
              navigate(path.home);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo}
              alt="ATI Logo"
              style={{ height: "auto", width: "150px" }}
            />
          </Box>
          <Typography
            fontFamily="JostRegular"
            fontSize="1rem"
            color="#4E64EE"
            fontWeight="bold"
          >
            831 W Higgins Road, Schaumburg,
            <br /> IL 60195
          </Typography>
          <Typography
            fontFamily="JostRegular"
            fontSize="1rem"
            color="#4E64EE"
            fontWeight="bold"
            sx={{ mt: 1 }}
          >
            Copyright © {new Date().getFullYear()} Air Tours Inc.
            <br /> | All rights reserved
          </Typography>
        </Grid>

        {/* Center Section */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            mt: { xs: 4, md: 0 },
            width: { xs: "100%", md: "fit-content" },
          }}
        >
          <Typography
            fontFamily="RalewayRegular"
            fontSize="2rem"
            color="#4E64EE"
            fontWeight="700"
            gutterBottom
          >
            Quick Links
          </Typography>

          {/* {["Home", "About", "Service", "Contact"].map((text) => (
            <Link
              key={text}
              to={path[text.toLowerCase()]}
              style={{
                fontFamily: "RalewayRegular",
                textDecoration: "none",
                display: "block",
                lineHeight: "3.5rem",
                fontWeight: "bold",
                color: "#4E64EE",
                fontSize: "1.2rem",
              }}
            >
              {text}
            </Link>
          ))} */}
          {pages.map((page) => {
            const isActive = location.pathname === path[page.toLowerCase()];

            return (
              <Link
                key={page}
                to={path[page.toLowerCase()]}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  fontFamily: "RalewayRegular",
                  textDecoration: "none",
                  display: "block",
                  lineHeight: "3.5rem",
                  fontWeight: "bold",
                  color: "#4E64EE",
                  fontSize: "1.2rem",
                }}
              >
                {page}
              </Link>
            );
          })}
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4} sx={{ mt: { xs: 3, md: 0 } }}>
          <Typography
            fontFamily="RalewayRegular"
            fontSize="2rem"
            color="#4E64EE"
            fontWeight="700"
            gutterBottom
          >
            Follow Us On
          </Typography>
          <Box sx={{ display: "flex", gap: 5, mt: 4 }}>
            <Link href="#" sx={{ display: "inline-block" }}>
              <img
                src={FacebookIcon}
                alt="Facebook"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </Link>
            <Link href="#" sx={{ display: "inline-block" }}>
              <img
                src={InstagramIcon}
                alt="Instagram"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </Link>
            {/* <Link href="#" sx={{ display: "inline-block" }}>
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                style={{ height: "2.5rem", width: "2.5rem" }}
              />
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
