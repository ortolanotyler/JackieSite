import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// Define a validation schema using Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

// Create a MUI theme with custom typography
const theme = createTheme({
  typography: {
    button: {
      justifyContent: 'center',
      fontFamily: 'GFS Didot, serif',
      fontSize: '24px',
      fontWeight: 'bold',
    },
  },
});

export default function EmailSubscribe() {
  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await fetch('http://localhost:3001/submit-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: values.email }),
            });

            if (response.ok) {
              alert('Email subscribed successfully!');
              resetForm();
            } else {
              alert('Failed to subscribe email.');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error submitting email.');
          }
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting, touched, errors }) => (
          <Box
            component={Form}
            sx={{
              backgroundColor: 'white',
              display: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '20vh', // Center vertically on the page
            }}
            noValidate
            autoComplete="on"
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  variant="standard"
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  style={{
                    backgroundColor: '#EBE8E4',
                    color: '#745B4F',
                    borderRadius: '1px',
                  }}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
    </ThemeProvider>
  );
}
