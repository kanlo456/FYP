import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Chatbox from "../chatbot/Chatbot";
import Navbar from "../components/Navbar";
import Facebook from "../chatbot/Facebook";
import Whatsapp from "../chatbot/Whatsapp";
// import Navbar from "components/Navbar";
// import Sidebar from "components/Sidebar";
// import { useGetUserQuery } from "state/api";
import { useAuthContext } from "../hooks/useAuthContext";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //   const userId = useSelector((state) => state.global.userId);
  //   const { data } = useGetUserQuery(userId);
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;
  const role = user.role[0];

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        role = {role}
        username={username}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          username={username}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Chatbox />
        <Facebook />
        <Whatsapp />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
