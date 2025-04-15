import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAddContact } from "../../utils/ApiHelper";
import { color } from "../../constant";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ContactSec3 = () => {
  const { mutate, isLoading } = useAddContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  // Function to validate form fields
  const validate = () => {
    let tempErrors = {};

    if (!formData.name?.trim()) tempErrors.name = "Name is required!";
    else if (formData.name.length < 4)
      tempErrors.name = "Name must be at least 4 characters long!";

    if (!formData.email?.trim()) tempErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format!";

    if (!formData.phoneNo?.trim()) tempErrors.phoneNo = "phoneNo is required!";
    else if (formData.phoneNo.length !== 10)
      tempErrors.phoneNo = "phoneNo must be at least 10 characters long!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      mutate(formData, {
        onSuccess: () => {
          toast.success("Your message sent Successfully!");
          setFormData({ name: "", email: "", phoneNo: "", message: "" }); // Reset form
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message);
        },
      });
    }
  };
  return (
    <>
      <ToastContainer />
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.7082054048296!2d-88.1040135234091!3d42.049437054668665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa8ba41de8c03%3A0x7592ccd2635a7e32!2s831%20W%20Higgins%20Rd%2C%20Schaumburg%2C%20IL%2060195%2C%20USA!5e0!3m2!1sen!2sin!4v1744373957170!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>

          {/* FORM SECTION */}
          <Grid
            component="form"
            onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Name"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1rem",
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px transparent inset",
                    WebkitTextFillColor: "white",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                },
                borderBottom: "1px solid white",
                mb: 2,
              }}
              error={!!errors.name}
              helperText={errors.name}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />
            {/* Phone Number  */}
            <TextField
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Phone"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1rem",
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px transparent inset",
                    WebkitTextFillColor: "white",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                },
                borderBottom: "1px solid white",
                mb: 2,
              }}
              error={!!errors.phoneNo}
              helperText={errors.phoneNo}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />

            {/* EMAIL FIELD */}
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Email"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1rem",
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px transparent inset",
                    WebkitTextFillColor: "white",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                },
                borderBottom: "1px solid white",
                mb: 2,
              }}
              error={!!errors.email}
              helperText={errors.email}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
            />

            {/* MESSAGE FIELD */}
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              variant="standard"
              label="Message"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: {
                  color: "white",
                  fontSize: "1rem",
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px transparent inset",
                    WebkitTextFillColor: "white",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                },
                borderBottom: "1px solid white",
                mb: 3,
              }}
              error={!!errors.message}
              helperText={errors.message}
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
