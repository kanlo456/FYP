// import {useState} from 'react'
// import { useLogin } from '../hooks/useLogin'

// const Login = () =>{
//     const [username,setUsername] = useState('')
//     const [password,setPassword] = useState('')
//     const{login,error,isLoading} = useLogin()

//     const handleSubmit = async (e)=>{
//         e.preventDefault()
//         // console.log(email,password)
//         await login(username,password)
//     }

//     return(
//         <form className='login' onSubmit={handleSubmit}>
//         <h3>Login</h3>

//         <label>User Name:</label>
//         <input
//             type="string"
//             onChange={(e)=>setUsername(e.target.value)}
//             value={username}
//         />

//         <label>Password:</label>
//         <input
//             type="password"
//             onChange={(e)=>setPassword(e.target.value)}
//             value={password}
//         />
//         <button disabled={isLoading}>Login</button>
//         {error && <div className='error'>{error}</div>}
//         </form>
//     )
// }
// export default Login

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLogin } from "../hooks/useLogin";
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

export default function LoginPage() {
  const { login, error, isLogin } = useLogin();

  const handleSubmit = async (values) => {
    // event.preventDefault();
    console.log(values.username, values.password);
    await login(values.username, values.password);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Welcome to WSIG Ticket System
            </Typography>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {error && (
              <Typography
                sx={{ color: "red" }}
              >{`${error}! Please try angin!`}</Typography>
            )}
            <Box
              // component="form"
              // noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={checkLoginSchema}
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
                    <TextField
                      fullWidth
                      margin="normal"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                      id="username"
                      label="User Name"
                      value={values.username}
                      name="username"
                      // autoComplete="username"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.password && !!errors.password}
                      fullWidth
                      value={values.password}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  </form>
                )}
              </Formik>
              {/* <Formik>
                {(<form>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <form/>
                )}
              </Formik> */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="../signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const initialValues = {
  username: "",
  password: "",
};

const checkLoginSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});
