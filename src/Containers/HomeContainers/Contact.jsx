import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import FlightConatact from "../../assets/Svg/FlightConatact.svg";
import { color } from "../../constant";
const Contact = () => {
  const contactDetails = [
    {
      icon: (
        <Email
          sx={{
            mr: 1,
            backgroundColor: "#4E64EE",
            borderRadius: "50%",
            fontSize: "1rem",
            p: 1,
          }}
        />
      ),
      text: "pravinapatel@airtoursinc.us",
    },
    {
      icon: (
        <Phone
          sx={{
            mr: 1,
            backgroundColor: "#4E64EE",
            borderRadius: "50%",
            fontSize: "1rem",
            p: 1,
          }}
        />
      ),
      text: "847 301 7777 | 773 764 4544",
    },
    {
      icon: (
        <LocationOn
          sx={{
            mr: 1,
            backgroundColor: "#4E64EE",
            borderRadius: "50%",
            fontSize: "1rem",
            p: 1,
          }}
        />
      ),
      text: "831 W Higgins Road, Schaumburg, IL 60195",
    },
  ];

  return (
    <Container sx={{ py: 6, color: "white", borderRadius: 2 }}>
      <Typography
        display="flex"
        justifyContent="center"
        fontFamily="RalewayRegular"
        fontWeight="700"
        fontSize="2rem"
      >
        Ready to Start Your Journey?
      </Typography>
      <Typography
        display="flex"
        justifyContent="center"
        fontFamily="RalewayRegular"
        fontSize="1.2rem"
      >
        Your next adventure is just a call away. Contact us today to book your
        flights, cruises, or tours!
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            mt: "5%",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              mt: "5%",
            }}
          >
            <Grid sx={{ width: { xs: "340px", md: "800px" } }}>
              {contactDetails.map((item, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  {item.icon}
                  <Typography fontSize="1rem" fontFamily="RalewayRegular">
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>

          {/* Center  */}
          <Grid
            item
            xs={12}
            md={2}
            display="flex"
            justifyContent="center"
            sx={{ width: "50%", display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <img src={FlightConatact} alt="FlightConatact" />{" "}
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6} sx={{ marginTop: { xs: 1, sm: 2 } }}>
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              fullWidth
              label="Name"
              variant="filled"
              sx={{
                mb: 2,
                backgroundColor: "#4E64EE",
                color: "white",
                borderRadius: 1,
              }}
            />
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              fullWidth
              label="Phone"
              variant="filled"
              sx={{
                mb: 2,
                backgroundColor: "#4E64EE",
                color: "white",
                borderRadius: 1,
              }}
            />
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              fullWidth
              label="Email"
              variant="filled"
              sx={{
                mb: 2,
                color: "white",
                backgroundColor: "#4E64EE",
                borderRadius: 1,
              }}
            />
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
              fullWidth
              label="Write a Message"
              variant="filled"
              multiline
              rows={4}
              sx={{
                backgroundColor: "#4E64EE",
                color: "white",
                borderRadius: 1,
              }}
            />
            <Button
              className="submitbtn"
              type="submit"
              variant="outlined"
              sx={{
                marginY: "2%",
                border: "2px solid ",
                color: color.white,
                borderColor: color.blue,
                padding: "10px 20px",
                width: { xs: "100%", sm: "50%", xl: "40%" },
                fontSize: "1rem",
                fontFamily: "RalewayRegular",
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
