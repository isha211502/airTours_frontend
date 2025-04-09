// import React from "react";
// import { color } from "../../constant";
// import { Container, Grid, Typography } from "@mui/material";
// const ServicesSec3 = () => {
//   return (
//     <Grid sx={{ marginY: "2rem" }}>
//       <Container>
//         <Grid>
//           <Typography
//             sx={{
//               fontFamily: "RalewayRegular",
//               fontSize: "3rem",
//               fontWeight: "700",
//               color: color.blue,
//               lineHeight: "3rem",
//             }}
//           >
//             Our Flight Services{" "}
//           </Typography>
//         </Grid>
//         <Grid sx={{ display: "flex", marginY: "5%" }}>
//           <Grid
//             sx={{
//               width: "40%",
//               backgroundColor: color.blue,
//               color: color.white,
//             }}
//           >
//             <Typography>1.International & Domestic Flight Bookings</Typography>
//             <Typography>
//               2.Express Services Available – We Upload Your Passport for Urgent
//               Travel Needs
//             </Typography>
//             <Typography>
//               3. US Passport Service Updation – No OCI Re-Issue Required
//             </Typography>
//             <Typography>4. OCI Service (Regular, Minor & Reissue)</Typography>
//             <Typography>5. Renunciation of Indian Citizenship</Typography>
//             <Typography>
//               6. Indian Passport Renewal & Tatkal Services
//             </Typography>
//             <Typography>7. E-Visa for India</Typography>
//             <Typography>8. Cruise Services</Typography>
//             <Typography>9. Global Entry Service </Typography>
//           </Grid>
//           <Grid>
//             {" "}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
//             voluptas mollitia iste ducimus error minima laboriosam
//             exercitationem maiores placeat eaque? Ut possimus aspernatur
//             consequatur voluptate rerum a corrupti quisquam iusto.
//           </Grid>
//         </Grid>
//       </Container>
//     </Grid>
//   );
// };

// export default ServicesSec3;import { useState } from "react";
import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { color } from "../../constant";

const contentData = [
  {
    id: 1,
    title: "International & Domestic Flight Bookings",
    content:
      "Book your international and domestic flights with ease. We offer competitive rates and hassle-free bookings.",
  },
  {
    id: 2,
    title:
      "Express Services Available – We Upload Your Passport for Urgent Travel Needs",
    content:
      "Need urgent passport upload? Our express services ensure fast processing for your travel needs.",
  },
  {
    id: 3,
    title: "US Passport Service Updation – No OCI Re-Issue Required",
    content:
      "Update your US passport effortlessly without the need for an OCI re-issue.",
  },
  {
    id: 4,
    title: "OCI Service (Regular, Minor & Reissue)",
    content:
      "Get assistance with regular, minor, and reissue OCI services smoothly.",
  },
  {
    id: 5,
    title: "Renunciation of Indian Citizenship",
    content:
      "We provide services to renounce Indian citizenship following legal procedures.",
  },
  {
    id: 6,
    title: "Indian Passport Renewal & Tatkal Services",
    content:
      "Renew your Indian passport quickly with our regular and Tatkal services.",
  },
  {
    id: 7,
    title: "E-Visa for India",
    content: "Apply for an E-Visa to India hassle-free through our service.",
  },
  {
    id: 8,
    title: "Cruise Services",
    content: "Explore our cruise packages for an unforgettable experience.",
  },
  {
    id: 9,
    title: "Global Entry Service",
    content:
      "Speed up your entry process with our Global Entry Service assistance.",
  },
];

function ServicesSec3() {
  const [activeId, setActiveId] = useState(contentData[0].id);
  return (
    <Grid>
      <Container>
        <Typography
          sx={{
            fontFamily: "RalewayRegular",
            fontSize: "3rem",
            fontWeight: 800,
          }}
        >
          Our Flight Services
        </Typography>
        <Grid container sx={{ display: "flex", marginY: "5%" }}>
          <Grid
            item
            sx={{
              width: "40%",
              backgroundColor: "#007BFF",
              color: "white",
              padding: "20px",
            }}
          >
            {contentData.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor:
                    activeId === item.id ? "#0056b3" : "transparent",
                  transition: "0.3s",
                }}
                onClick={() => setActiveId(item.id)}
              >
                {item.id}. {item.title}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            sx={{
              padding: "20px",
              width: "60%",
              backgroundColor: color.dark,
              color: color.white,
            }}
          >
            {activeId !== null && (
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {contentData.find((item) => item.id === activeId).content}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ServicesSec3;
