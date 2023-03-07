import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import TicketStatusBox from "../components/TicketStatusBox";

const DailyChartPage = () => {
  return (
    <Box m="1.5rem 2.5rem"> 
      <Header title={"Daily Chart"} subtitle={"This is Daily Chart"}></Header>
      <TicketStatusBox />
    </Box>
  );
};

export default DailyChartPage;
