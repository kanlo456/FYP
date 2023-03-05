import React, { Fragment, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Card, Paper } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StatusBox from "../components/StatusBox";
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
      // status: getStatusData.find("onCreate"),
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
  console.log(getStatusData);

  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, md: 10 }}>
          {statusItems.map((statusItem, index) => {
            return (
              <Grid xs={2}>
                <StatusBox
                  key={index}
                  text={statusItem.text}
                  icon={statusItem.icon}
                  status={statusItem.status}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default OverViewPage;
