import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
const ContactSec3 = () => {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          my: { xs: "10%", md: "5%" },
          px: { xs: 3.5, md: 3.5 },
          height: "100%",
        }}
      >
        <Container
          sx={{
            maxWidth: { xs: "100%", md: "90%", lg: "70%" },
            gap: "2rem",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            sx={{
              flex: 1,
              backgroundColor: color.dark,
              minHeight: "350px",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          ></Grid>

          {/* FORM SECTION */}
          <Grid
            component="form"
            // onSubmit={handleSubmit}
            sx={{
              backgroundColor: color.dark,
              flex: 1,
              p: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              borderRight: "1rem solid #4E64EE",
              borderBottom: "1rem solid #4E64EE",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2.5rem", md: "2.5rem" },
                fontFamily: "Jostbold",
                textAlign: { xs: "center", md: "left" },
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              SEND US A MESSAGE
            </Typography>
            <Typography sx={{ color: color.white, fontFamily: "JostRegular" }}>
              Have a question? Need help with bookings, visas, or passport
              renewals? Fill out the form below, and our team will get back to
              you promptly.
            </Typography>

            {/* NAME FIELD */}
            <TextField
              name="name"
              //   value={formData.name}
              //   onChange={handleChange}
              fullWidth
              variant="standard"
              label="Name"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white", fontSize: "1rem" },
                borderBottom: "1px solid white",
                mb: 2,
              }}
              //   error={!!errors.name}
              //   helperText={errors.name}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />
            {/* Phone Number  */}
            <TextField
              name="Phone"
              //   value={formData.email}
              //   onChange={handleChange}
              fullWidth
              variant="standard"
              label="Phone"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white", fontSize: "1rem" },
                borderBottom: "1px solid white",
                mb: 2,
              }}
              //   error={!!errors.email}
              //   helperText={errors.email}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />

            {/* EMAIL FIELD */}
            <TextField
              name="email"
              //   value={formData.email}
              //   onChange={handleChange}
              fullWidth
              variant="standard"
              label="Email"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: { color: "white", fontSize: "1rem" },
                borderBottom: "1px solid white",
                mb: 2,
              }}
              //   error={!!errors.email}
              //   helperText={errors.email}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />

            {/* MESSAGE FIELD */}
            <TextField
              name="message"
              //   value={formData.message}
              //   onChange={handleChange}
              fullWidth
              variant="standard"
              label="Message"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                textarea: { color: "white", fontSize: "1rem" },
                borderBottom: "1px solid white",
                mb: 3,
              }}
              //   error={!!errors.message}
              //   helperText={errors.message}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />

            {/* SUBMIT BUTTON */}
            <Button
              className="submitbtn"
              type="submit"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                padding: "10px 20px",
                width: { xs: "100%", sm: "50%", xl: "40%" },
              }}
            >
              Send A Message
            </Button>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ContactSec3;
