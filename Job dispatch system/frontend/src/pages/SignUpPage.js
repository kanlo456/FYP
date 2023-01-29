import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSignup } from "../hooks/useSignup";
import { Link as MuiLink } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://www.wsig.hk/">
        WSIG
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (values) => {
    await signup(
      values.userName,
      values.password,
      values.emailAddress,
      values.firstName,
      values.lastName,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ color: "red" }} component="h1" variant="h5">
            {error}
          </Typography>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={checkSignInSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.lastName && errors.lastName}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        value={values.lastName}
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        error={!!touched.emailAddress && !!errors.emailAddress}
                        value={values.emailAddress}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="emailAdress"
                        label="Email Address"
                        name="emailAddress"
                        helperText={touched.emailAddress && errors.emailAddress}
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.userName}
                        error={!!touched.userName && !!errors.userName}
                        helperText={touched.userName && errors.userName}
                        id="username"
                        label="User Name"
                        name="userName"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                      />
                      <Typography component="h2" variant="caption">
                        Please enter 8 number with at least one
                        lowercase,uppercase and symbols
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        error={
                          !!touched.confirmPassword && !!errors.confirmPassword
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      /> */}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </form>
              )}
            </Formik>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="../login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

const initialValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  userName: "",
  password: "",
  confirmPassword: "",
};

const checkSignInSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  emailAddress: yup
    .string()
    .email("Please enter vaild email")
    .required("required"),
  userName: yup.string().required("required"),
  password: yup
    .string()
    .min(8, "Please enter 8 number")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
      "The password not vaild!",
    )
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "The password doesn't match, please try again!!",
    ),
});
