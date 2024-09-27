import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Alert from "@mui/material/Alert";

import CheckIcon from "@mui/icons-material/Check";
import EmailIcon from "@mui/icons-material/Email";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PeopleIcon from "@mui/icons-material/People";


const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

export default function ContactUsForm() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    setShowAlert(true); // Show the alert
  };

  // Use useEffect to hide the alert after 15 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false); // Hide the alert after 15 seconds
      }, 10000);

      // Clean up the timer when the component unmounts or showAlert changes
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div>
      <Box
        sx={{ borderRadius: 2 }}
        className="shadow-xl border-l-2 justify-center relative"
      >
        {showAlert && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            className="overflow-auto absolute w-full"
          >
            Your message has been successfully submitted!
          </Alert>
        )}
        <Grid container spacing={5} className="p-5 pt-14">
          <Grid size={12}>
            <Typography
              variant="body1"
              color=""
              className="underline underline-offset-2"
            >
              If you have any inquiries, feel free to send us an email with the
              form below.
            </Typography>
          </Grid>
          <Grid size={6}>
            <TextField
              id="standard-basic"
              label={
                <>
                  <PeopleIcon /> First Name
                </>
              }
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="standard-basic"
              label={
                <>
                  <PeopleIcon /> Last Name
                </>
              }
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="standard-basic"
              label={
                <>
                  <EmailIcon /> Email Address
                </>
              }
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="outlined-basic"
              label={
                <>
                  <BorderColorIcon /> Enter Your Message
                </>
              }
              multiline
              rows={8}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid size={4} offset={8}>
            <SubmitButton
              variant="contained"
              className="uppercase w-full"
              onClick={handleSubmit}
            >
              submit
            </SubmitButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
