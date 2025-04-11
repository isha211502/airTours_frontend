import React, { useState } from "react";
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
import { useAddContact } from "../../utils/ApiHelper";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
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

    if (!formData.name.trim()) tempErrors.name = "Name is required!";
    else if (formData.name.length < 4)
      tempErrors.name = "Name must be at least 4 characters long!";

    if (!formData.email.trim()) tempErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format!";

    if (!formData.phoneNo.trim()) tempErrors.phoneNo = "phoneNo is required!";
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
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message);
        },
      });
    }
  };
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

  if (isLoading) {
    return <Typography>Loading.....</Typography>;
  }

  return (
    <Container sx={{ py: 6, color: "white", borderRadius: 2 }}>
      <ToastContainer />
      <Typography
        display="flex"
        justifyContent="center"
        fontFamily="RalewayBold"
        fontWeight="500"
        fontSize="3rem"
      >
        Ready to Start Your Journey?
      </Typography>
      <Typography
        display="flex"
        justifyContent="center"
        fontFamily="JostRegular"
        fontSize="1.1rem"
        letterSpacing="0.1rem"
      >
        Your next adventure is just a call away. Contact us today to book your
        flights, cruises, or tours and let us handle all the details!
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
                  <Typography
                    fontSize="0.9rem"
                    fontFamily="JostRegular"
                    letterSpacing="0.1rem"
                  >
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
              <img
                src={FlightConatact}
                alt="FlightConatact"
                style={{ marginTop: "20%" }}
              />{" "}
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid
            component="form"
            onSubmit={handleSubmit}
            item
            xs={12}
            md={6}
            sx={{ marginTop: { xs: 1, sm: 2 } }}
          >
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
                textarea: { color: "white", fontSize: "1rem" },
                borderBottom: "1px solid white",
                mb: 3,
              }}
              error={!!errors.message}
              helperText={errors.message}
              FormHelperTextProps={{ style: { color: "#f1a7a7" } }} // Error color
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
                padding: "5px 20px",
                width: { xs: "100%", sm: "50%", md: "100%" },
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
