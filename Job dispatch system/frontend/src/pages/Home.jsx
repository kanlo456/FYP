import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;
  const role = user.role[0];
  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h1">Welcome! {username}, Your Role {role}!</Typography>
    </Box>
  );
};

export default Home;
