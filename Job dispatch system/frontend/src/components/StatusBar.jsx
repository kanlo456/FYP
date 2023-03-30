import React from "react";
import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Card, Paper } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StatusBox from "../components/StatusBox";
import axios from "axios";
import { blue, deepOrange, green, purple, red } from "@mui/material/colors";

const StatusBar = () => {
  const [getStatusData, setGetStatusData] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  const statusItems = [
    {
      text: "On Create",
      icon: <AddCircleOutlineOutlinedIcon />,
      number: getStatusData.cancel,
      color: blue[800],
    },
    {
      text: "Holding",
      icon: <PauseCircleOutlineOutlinedIcon />,
      number: getStatusData.holding,
      color: purple[600],
    },
    {
      text: "Progress",
      icon: <SyncOutlinedIcon />,
      number: getStatusData.progress,
      color: deepOrange[700],
    },
    {
      text: "Solved",
      icon: <CheckOutlinedIcon />,
      number: getStatusData.solved,
      color: green[800],
    },
    {
      text: "Cancel",
      icon: <CancelOutlinedIcon />,
      number: getStatusData.cancel,
      color:red[800]
    },
  ];

  const getStatus = async () => {
    const response = await axios.get(`/api/tickets/getReport`);
    setGetStatusData(response.data[0]);
  };
  return (
    <Box m="1.5rem 2.5rem">
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, md: 10 }}>
        {statusItems.map((statusItem, index) => {
          return (
            <Grid xs={2}>
              <StatusBox
                key={index}
                text={statusItem.text}
                icon={statusItem.icon}
                number={statusItem.number}
                color={statusItem.color}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StatusBar;
