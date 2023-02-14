import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Header from "../components/Header";
import { useTheme, Button } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { lightBlue } from "@mui/material/colors";
import { darken, lighten } from "@mui/system";
import { red, green, blue, deepOrange, purple } from "@mui/material/colors";
import { useSelector } from "react-redux";

const getBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.5) : lighten(color, 0.3);

export default function Ticketboard() {
  const [data, setData] = useState([]);
  const [limitDateData, setLimitDateData] = useState([]);
  const mode = useSelector((state) => state.global.mode);

  const getTicket = async () => {
    const response = await axios.get("/api/tickets");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  function getLimitDateTickets(data) {
    const limitDateTickets = data;
    setLimitDateData(limitDateTickets.filter((getData) => getData.limitDate != null));
  }
  useEffect(() => {
    getTicket();
    getLimitDateTickets(data);
  }, [data]);

  const theme = useTheme();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
      renderCell: (params) => (
        <Link
          style={{ color: theme.palette.primary[100] }}
          to={`/dashboard/editTicket/${params.value}`}
        >
          {params.value}
        </Link>
      ),
    },
    { field: "status", headerName: "Status", width: 160 },
    {
      field: "limitDate",
      headerName: "Limit Date",
      width: 170,
      valueFormatter: (params) =>
        params.value == null ? "" : new Date(params.value).toLocaleDateString(),
    },
    {
      field: "createdAt",
      headerName: "Create Date",
      type: "dateTime",
      width: 150,
      valueFormatter: (params) => new Date(params?.value).toLocaleString(),
    },
    {},
    { field: "category", headerName: "Category", width: 130 },
    { field: "subcategory", headerName: "Sub-Category", width: 130 },
    { field: "offering", headerName: "Offering", width: 130 },
    { field: "configItem", headerName: "ConfigItem", width: 130 },
    { field: "shortDescription", headerName: "Short description", width: 200 },
    {
      field: "caller",
      headerName: "Caller",
      width: 160,
    },
    { field: "assignedTo", headerName: "Assiged to", width: 160 },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Limit Time Ticket"
        subtitle="Please handle the ticket AS SOON AS POSSIBLE!"
      />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${lightBlue[700]} !important`,
          },
          "& .super-app-theme--Solved": {
            bgcolor: `${getBackgroundColor(green[800], mode)}!important`,
            "&:hover": {
              bgcolor: `${getHoverBackgroundColor(green[600], mode)}!important`,
            },
          },
          "& .super-app-theme--Cancel": {
            bgcolor: `${getBackgroundColor(red[800], mode)}!important`,
            "&:hover": {
              bgcolor: `${getHoverBackgroundColor(red[600], mode)}!important`,
            },
          },
          "& .super-app-theme--On.Create": {
            bgcolor: `${getBackgroundColor(blue[800], mode)}!important`,
            "&:hover": {
              bgcolor: `${getHoverBackgroundColor(blue[600], mode)}!important`,
            },
          },
          "& .super-app-theme--Holding": {
            bgcolor: `${getBackgroundColor(purple[800], mode)}!important`,
            "&:hover": {
              bgcolor: `${getHoverBackgroundColor(
                purple[600],
                mode,
              )}!important`,
            },
          },
          "& .super-app-theme--Progress": {
            bgcolor: `${getBackgroundColor(deepOrange[700], mode)}!important`,
            "&:hover": {
              bgcolor: `${getHoverBackgroundColor(
                deepOrange[500],
                mode,
              )}!important`,
            },
          },
        }}
      >
        <DataGrid
          rows={limitDateData || []}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[10]}
          components={{ Toolbar: GridToolbar }}
          disableMultipleSelection={false}
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}
          checkboxSelection
        />
      </Box>
    </Box>
  );
}
