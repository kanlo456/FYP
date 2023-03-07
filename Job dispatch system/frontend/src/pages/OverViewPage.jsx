import React, { Fragment, useEffect, useState } from "react";
import { Card } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";

const OverViewPage = () => {
  const [getStatusData, setGetStatusData] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  const statusItems = [
    {
      text: "On Create",
      icon: <AddCircleOutlineOutlinedIcon />,
      // status: getStatusData
    },
    { text: "Holding", icon: <PauseCircleOutlineOutlinedIcon /> },
    {
      text: "Progress",
      icon: <SyncOutlinedIcon />,
    },
    {
      text: "Solved",
      icon: <CheckOutlinedIcon />,
    },
    { text: "Cancel", icon: <CancelOutlinedIcon /> },
  ];

  const getStatus = async () => {
    const response = await axios.get(`/api/tickets/getReport`);
    setGetStatusData(response.data);
  };
  

  return (
    <Fragment>
      <Card> test 123</Card>
    </Fragment>
  );
};

export default OverViewPage;
